import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, Role, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import * as bcrypt from 'bcrypt';
import { GetUsersDto } from './dto/get-user.dto';

@Injectable()
export class UserService {
  userSelect: Prisma.UserSelect = {
    id: true,
    email: true,
    isActive: true,
    role: true,
    createdAt: true,
    updatedAt: true,
  };
  constructor(private readonly prismaService: PrismaService) {}

  /*Get All Users*/
  async findAll(getUsersDto: GetUsersDto, authUser: User) {
    const { filter, sortField, sortValue, page = 1, limit = 10 } = getUsersDto;

    const offset = (page - 1) * limit;

    const userWhereInput: Prisma.UserWhereInput = {
      NOT: {
        id: authUser.id,
      },
    };

    const emailFilter = filter?.find((item) => item.id === 'email');
    const roleFilter = filter?.find((item) => item.id === 'role');

    if (emailFilter) {
      userWhereInput.email = {
        contains: (emailFilter.value as string) || undefined,
        mode: 'insensitive',
      };
    }

    if (roleFilter) {
      userWhereInput.role = {
        in: (roleFilter.value as Role[]) || undefined,
      };
    }

    const users = await this.prismaService.user.findMany({
      where: userWhereInput,
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
        createdAt: true,
      },
      orderBy: {
        [sortField]: sortValue,
      },
      skip: offset,
      take: +limit,
    });

    const count = await this.prismaService.user.count({
      where: userWhereInput,
    });

    return new ApiResponse({ count, list: users });
  }

  async addUser(createUserDto: CreateUserDto) {
    const { email, role, password } = createUserDto;

    const select: Prisma.UserSelect = {
      id: true,
      email: true,
      isActive: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    };

    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
      select,
    });

    if (user) {
      throw new UnprocessableEntityException(
        `User with ${email} already exists`,
      );
    }

    const hashedPassword = await this.createPassword(password);

    const newUser = await this.prismaService.user.create({
      data: {
        email: email?.toLowerCase(),
        role,
        isActive: true,
        password,
      },
      select,
    });

    return new ApiResponse(newUser, 'User Added Successfully');
  }

  async userToggleStatus(id: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new UnprocessableEntityException(
        `User with this id ${id} does not found`,
      );
    }

    const update = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        isActive: !user.isActive,
      },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return new ApiResponse(update, 'Status Updated Successfully');
  }

  async getUser(id: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
      select: this.userSelect,
    });

    if (!user) {
      throw new UnprocessableEntityException('User does done not exist');
    }

    return new ApiResponse(user);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const { role } = updateUserDto;

    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
      select: this.userSelect,
    });

    if (!user) {
      throw new UnprocessableEntityException(
        `User with this id ${id} does not exist`,
      );
    }

    // if (role === 'USER') {
    //   //check if he is collaborator on some page
    //   const isCollaborator = await this.prismaService.userPage.findFirst({
    //     where: {
    //       userId: user.id,
    //     },
    //   });

    //   if (isCollaborator) {
    //     const updatedUser = await this.prismaService.user.update({
    //       where: {
    //         id,
    //       },
    //       data: {
    //         role: 'COLLABORATOR',
    //       },
    //       select: this.userSelect,
    //     });
    //     return new ApiResponse(updatedUser, 'User Updated Successfully');
    //   }
    // }

    const updatedUser = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        role,
      },
      select: this.userSelect,
    });

    return new ApiResponse(updatedUser, 'User Updated Successfully');
  }

  async deleteUser(id: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new UnprocessableEntityException(
        `User with this id ${id} does not exist`,
      );
    }

    const deletedUser = await this.prismaService.user.delete({
      where: {
        id: user.id,
      },
      select: this.userSelect,
    });

    return new ApiResponse(deletedUser, 'User Deleted Successfully');
  }

  /*Auth User Service*/
  async getOwnProfile(authUser: User) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: authUser.id,
      },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
        createdAt: true,
      },
    });
    return new ApiResponse(user);
  }

  /*User Service*/

  createPassword = async (password: string | null): Promise<string | null> => {
    if (password === null) return null;
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  };
}
