import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Logger,
  ValidationPipe,
  VERSION_NEUTRAL,
  VersioningType,
} from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { ApiResponseInterceptor } from './common/interceptors/api-response.interceptor';
import { ConfigService } from '@nestjs/config';

import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);

  const logger = new Logger();

  app.enableCors({
    credentials: true,
    origin: ['http://localhost:5174', 'http://localhost:5173', ],
  });
  // app.enableCors();

  app.setGlobalPrefix('api', {
    exclude: ['/storage/(.*)', '/samlLogin', '/log-out'],
  });

  app.enableVersioning({
    defaultVersion: [VERSION_NEUTRAL, '1'],
    type: VersioningType.URI,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      stopAtFirstError: true,
    }),
  );

  const cookieSigningKey = configService.get<string>('cookie.signingKey');
  app.use(cookieParser(cookieSigningKey));

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new ApiResponseInterceptor());

  app.enableShutdownHooks();

  const port = configService.get<number>('port');

  await app.listen(port as number);
  logger.log(`Application is running on port: ${port}`);
}
bootstrap();
