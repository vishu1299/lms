import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ApiResponse } from '../common/dto/api-response.dto';
import { SignInResponse } from './types/sign-in-response.type';
import { SUCCESS_SIGN_IN_MESSAGE } from './constants/messages';
import nodemailer from 'nodemailer';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { CreateNewPasswordDto } from './dto/create-new-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto): Promise<ApiResponse> {
    const { name, email, password } = registerDto;

    const isExist = await this.prismaService.user.findUnique({
      where: { email },
      include: { Otp: true },
    });

    if (isExist && isExist.isEmailVerified) {
      throw new UnprocessableEntityException(
        `User with email (${email}) has already registered.`,
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('smtp.host'),
      port: this.configService.get<number>('smtp.port'),
      secure: true,
      auth: {
        user: this.configService.get<string>('smtp.user'),
        pass: this.configService.get<string>('smtp.password'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: this.configService.get<string>('smtp.user'),
      to: email,
      subject: 'Your OTP for Aura Vault Registration',
      html: `
        <p>Dear ${name},</p>
        <p>Your OTP for completing the registration process for the Aura Vault app is:</p>
        <p><strong>${otp}</strong></p>
        <p>Please do not share this OTP with anyone to ensure the security of your account.</p>
        <p>If you did not request this, please ignore this message.</p>
        <p>Thank you for choosing Aura Vault!</p>
        <p>Best regards,<br />Aura Vault Support Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    const user = await this.prismaService.user.upsert({
      where: { email },
      update: {
        password: await this.createPassword(password),
        UserProfile: { update: { name } },
      },
      create: {
        email,
        password: await this.createPassword(password),
        UserProfile: { create: { name } },
      },
    });

    await this.prismaService.otp.upsert({
      where: {
        userId: user.id,
        type: 'REGISTRATION',
      },
      update: {
        oneTimePassword: await this.createPassword(otp),
      },
      create: {
        type: 'REGISTRATION',
        userId: user.id,
        oneTimePassword: await this.createPassword(otp),
      },
    });

    return new ApiResponse(null, `OTP sent successfully to ${user.email}`);
  }

  async verifyOtp(
    verifyOtpDto: VerifyOtpDto,
  ): Promise<ApiResponse<SignInResponse>> {
    const { otp, email } = verifyOtpDto;

    const user = await this.prismaService.user.findFirst({ where: { email } });
    if (!user) throw new UnauthorizedException('User not found');

    if (user.isEmailVerified) {
      throw new UnprocessableEntityException('User already registered');
    }

    const otpTable = await this.prismaService.otp.findFirst({
      where: {
        userId: user.id,
        type: 'REGISTRATION',
      },
    });

    if (!otpTable) {
      throw new UnprocessableEntityException(
        'No OTP is associated with this user',
      );
    }

    const isOtpMatch = await bcrypt.compare(otp, otpTable.oneTimePassword);
    if (!isOtpMatch) {
      throw new UnprocessableEntityException('OTP does not match');
    }

    await this.prismaService.user.update({
      where: { email },
      data: { isEmailVerified: true },
    });

    await this.prismaService.otp.delete({
      where: {
        userId: user.id,
        type: 'REGISTRATION',
      },
    });

    const jwtPayload = this.createJwtPayload(user.id);
    return new ApiResponse(jwtPayload, 'OTP Verified, Registration successful');
  }

  async login(loginDto: LoginDto): Promise<ApiResponse<SignInResponse>> {
    const user = await this.prismaService.user.findUnique({
      where: { email: loginDto.email },
    });

    if (!user || !user.isEmailVerified) {
      throw new UnauthorizedException(
        'Sorry, your email is not registered. Please register yourself',
      );
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Your account is not active');
    }

    const isPasswordMatch = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid Password.');
    }

    const jwtPayload = this.createJwtPayload(user.id);
    return new ApiResponse<SignInResponse>(jwtPayload, SUCCESS_SIGN_IN_MESSAGE);
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;
    const user = await this.prismaService.user.findUnique({
      where: { email, isEmailVerified: true },
      include: {
        UserProfile: true,
      },
    });
    if (!user) throw new UnprocessableEntityException('User not found');

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await this.prismaService.otp.upsert({
      where: {
        userId: user.id,
        type: 'FORGOT_PASSWORD',
      },
      update: {
        oneTimePassword: await this.createPassword(otp),
      },
      create: {
        oneTimePassword: await this.createPassword(otp),
        type: 'FORGOT_PASSWORD',
        userId: user.id,
      },
    });

    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('smtp.host'),
      port: this.configService.get<number>('smtp.port'),
      secure: true,
      auth: {
        user: this.configService.get<string>('smtp.user'),
        pass: this.configService.get<string>('smtp.password'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: this.configService.get<string>('smtp.user'),
      to: email,
      subject: 'Password Reset Request for Aura Vault',
      html: `
        <p>Dear ${user.UserProfile.name},</p>
        <p>You have requested to reset your password for the Aura Vault app. Your OTP to reset your password is:</p>
        <p><strong>${otp}</strong></p>
        <p>Please use this OTP to reset your password. </p>
        <p>If you did not request this, please ignore this message, and your account will remain secure.</p>
        <p>Thank you for choosing Aura Vault!</p>
        <p>Best regards,<br />Aura Vault Support Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new ApiResponse(null, `OTP has been sent successfully to ${email}`);
  }

  async verifyForgotPasswordOtp(verifyOtpDto: VerifyOtpDto) {
    const { otp, email } = verifyOtpDto;
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new UnprocessableEntityException('User not found');

    const otpTable = await this.prismaService.otp.findFirst({
      where: {
        userId: user.id,
        type: 'FORGOT_PASSWORD',
      },
    });

    if (!otpTable) {
      throw new UnprocessableEntityException(
        'No OTP associated with this user',
      );
    }

    const isOtpMatch = await bcrypt.compare(otp, otpTable.oneTimePassword);
    if (!isOtpMatch) {
      throw new UnprocessableEntityException('OTP does not match');
    }

    await this.prismaService.otp.update({
      where: {
        userId: user.id,
        type: 'FORGOT_PASSWORD',
      },
      data: {
        isVerified: true,
      },
    });

    return new ApiResponse(null, 'OTP verified successfully');
  }

  async createNewPassword(createNewPasswordDto: CreateNewPasswordDto) {
    const { password, email } = createNewPasswordDto;
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new UnprocessableEntityException('User not found');

    const otpTable = await this.prismaService.otp.findFirst({
      where: {
        userId: user.id,
        type: 'FORGOT_PASSWORD',
      },
    });

    if (!otpTable) {
      throw new UnprocessableEntityException(
        'No OTP associated with this user',
      );
    }

    if (!otpTable.isVerified) {
      throw new UnprocessableEntityException('OTP is not verified');
    }

    await this.prismaService.user.update({
      where: { email },
      data: {
        password: await this.createPassword(password),
      },
    });

    await this.prismaService.otp.delete({
      where: {
        userId: user.id,
        type: 'FORGOT_PASSWORD',
      },
    });

    return new ApiResponse(null, 'Password updated successfully');
  }

  private async createPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  private createJwtPayload(id: string) {
    return {
      token_type: 'Bearer',
      access_token: this.jwtService.sign({ sub: id }),
      expires_in: this.configService.get<string>('jwt.expiresIn'),
    };
  }
}
