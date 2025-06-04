// forum.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ForumService } from './forums.service';
import { ForumCreateDto } from './dto/create-forum.dto';
import { ForumUpdateDto } from './dto/update-forum.dto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateSaveDto } from './dto/create-save.dto';
import { CreateLikeDto } from './dto/create-like.dto';
import { CreateForumTagDto } from './dto/Create-ForumTag.dto';

@Controller('forums')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post()
  async createForum(@Body() forumCreateDto: ForumCreateDto) {
    const result = await this.forumService.createForum(forumCreateDto);

    return new ApiResponse(result);
  }

  @Get()
  async getAllForums() {
    const result = await this.forumService.getAllForums();

    return new ApiResponse(result);
  }

  @Get(':id')
  async getForumById(@Param('id') id: string) {
    const result = await this.forumService.getForumById(id);

    return new ApiResponse(result);
  }

  @Put(':id')
  async updateForum(
    @Param('id') id: string,
    @Body() forumUpdateDto: ForumUpdateDto,
  ) {
    const result = await this.forumService.updateForum(id, forumUpdateDto);

    return new ApiResponse(result);
  }

  @Delete(':id')
  async deleteForum(@Param('id') id: string) {
    const result = await this.forumService.deleteForum(id);

    return new ApiResponse(result);
  }

  @Post('like')
  async likeForum(@Body() dto: CreateLikeDto) {
    const result = await this.forumService.LikeForum(dto);

    return new ApiResponse(result);
  }

  // Save Forum
  @Post('save')
  async saveForum(@Body() dto: CreateSaveDto) {
    const result = await this.forumService.saveForum(dto);
    console.log('result', result);

    return new ApiResponse(result);
  }

  // Comment on Forum
  @Post('comment')
  async commentOnForum(@Body() dto: CreateCommentDto) {
    const result = await this.forumService.commentOnForum(dto);

    return new ApiResponse(result);
  }

  // POST: Add a new tag to the forum
  @Post()
  async create(@Body() dto: CreateForumTagDto) {
    return this.forumService.createForumTag(dto);
  }

  // DELETE: Remove a tag from the forum
  @Delete(':forumId/:tagId')
  async remove(
    @Param('forumId') forumId: string,
    @Param('tagId') tagId: string,
  ) {
    return this.forumService.deleteForumTag(forumId, tagId);
  }
}
