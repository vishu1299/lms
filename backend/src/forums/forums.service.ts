// forum.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ForumCreateDto } from './dto/create-forum.dto';
import { ForumUpdateDto } from './dto/update-forum.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateSaveDto } from './dto/create-save.dto';
import { CreateLikeDto } from './dto/create-like.dto';
import { CreateForumTagDto } from './dto/Create-ForumTag.dto';

@Injectable()
export class ForumService {
  constructor(private readonly prismaService: PrismaService) {}

  async createForum(createForumDto: ForumCreateDto) {
    const { authorId, title, description } = createForumDto;

    const existingForum = await this.prismaService.forum.findFirst({
      where: { title },
    });

    if (existingForum) {
      throw new UnauthorizedException(
        'A forum with this title already exists.',
      );
    }

    return await this.prismaService.forum.create({
      data: {
        authorId,
        title,
        description,
      },
    });
  }

  // Get All Forums
  async getAllForums() {
    return await this.prismaService.forum.findMany({
      include: {
        Author: true,
      },
    });
  }

  // Get Forum by ID
  async getForumById(id: string) {
    return await this.prismaService.forum.findUnique({
      where: { id },
      include: {
        Author: true,
      },
    });
  }

  // Update Forum
  async updateForum(id: string, data: ForumUpdateDto) {
    return await this.prismaService.forum.update({
      where: { id },
      data,
    });
  }

  // Delete Forum
  async deleteForum(id: string) {
    return await this.prismaService.forum.delete({
      where: { id },
    });
  }

  // Like Forum
  async LikeForum(dto: CreateLikeDto) {
    const { userId, forumId } = dto;

    if (!userId || !forumId) {
      throw new UnauthorizedException('userId and forumId are required');
    }

    const existingLike = await this.prismaService.forumLike.findFirst({
      where: { userId, forumId },
    });

    if (existingLike) {
      await this.prismaService.forumLike.delete({
        where: { id: existingLike.id },
      });
      return { message: 'Forum unlike successfully' };
    }
    await this.prismaService.forumLike.create({
      data: { userId, forumId },
    });

    return { message: 'Forum liked successfully' };
  }

  // Save Forum
  async saveForum(dto: CreateSaveDto) {
    return await this.prismaService.forumSave.create({
      data: dto,
    });
  }

  // Comment on Forum
  async commentOnForum(dto: CreateCommentDto) {
    return await this.prismaService.comment.create({
      data: dto,
    });
  }

  // Create new ForumTag relation
  async createForumTag(dto: CreateForumTagDto) {
    const { forumId, tagId } = dto;

    // Check if the relation already exists to avoid duplicates
    const existingForumTag = await this.prismaService.forumTags.findFirst({
      where: {
        forumId,
        tagId
      },
    });

    if (existingForumTag) {
      throw new Error('This tag is already associated with this forum');
    }

    return await this.prismaService.forumTags.create({
      data: {
        forumId,
        tagId
      },
    });
  }

  // Remove ForumTag relation (delete tag from forum)
  async deleteForumTag(forumId: string, tagId: string) {
    const forumTag = await this.prismaService.forumTags.findFirst({
      where: { forumId, tagId },
    });

    if (!forumTag) {
      throw new Error('Relation not found');
    }

    return await this.prismaService.forumTags.delete({
      where: { id: forumTag.id },
    });
  }
}
