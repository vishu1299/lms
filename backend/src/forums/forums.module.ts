// forum.module.ts
import { Module } from '@nestjs/common';
import { ForumService } from './forums.service';
import { ForumController } from './forums.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ForumController],
  providers: [ForumService, PrismaService],
})
export class ForumModule {}
