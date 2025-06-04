import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCourseDto) {
    const { title } = dto;

    const existing = await this.prisma.course.findFirst({
      where: { title },
    });

    if (existing) {
      throw new UnauthorizedException('Course with this title already exists');
    }

    const course = await this.prisma.course.create({ data: dto });
    return course;
  }

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        instructor: true,
        videos: true,
        quizzes: true,
        enrolledUsers: true,
      },
    });
  }

  async findOne(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        instructor: true,
        videos: true,
        quizzes: true,
        enrolledUsers: true,
      },
    });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  async update(id: string, dto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.course.delete({ where: { id } });
  }
}
