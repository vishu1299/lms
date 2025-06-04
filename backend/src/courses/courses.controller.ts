import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiResponse } from 'src/common/dto/api-response.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('create')
  async create(@Body() dto: CreateCourseDto) {
    const result = await this.courseService.create(dto);
    return new ApiResponse(result);
  }

  @Get('')
  async findAll() {
    const result = await this.courseService.findAll();

    return new ApiResponse(result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.courseService.findOne(id);

    return new ApiResponse(result);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    const result = await this.courseService.update(id, dto);

    return new ApiResponse(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.courseService.remove(id);
    return new ApiResponse(result);
  }
}
