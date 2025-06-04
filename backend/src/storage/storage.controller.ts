import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import { StorageService } from './storage.service';
import { SkipAuth } from '../auth/decorators/skip-auth.decorator';
import { Readable } from 'stream';

@Controller('storage')
export class StorageController {
  constructor(private storageService: StorageService) {}
  @Get(':file')
  @SkipAuth()
  public async getFile(
    @Res() response: Response,
    @Param('file') fileName: string,
  ) {
    try {
      const file = await this.storageService.findFile(fileName);

      const fileStream = file.Body as Readable;

      response.set({
        'Content-Type': file.ContentType,
        'Content-Length': file.ContentLength,
        'Last-Modified': file.LastModified,
        'Content-Disposition': `inline;`,
        'Cache-Control': 'public, max-age=604800',
      });

      fileStream.on('end', () => {
        response.end();
      });
      fileStream.pipe(response);
    } catch (error) {
      throw new NotFoundException('File not found.');
    }
  }
}
