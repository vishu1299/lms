import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { configValidationSchema } from './config/config-validation.schema';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthCookieMiddleware } from './common/middleware/auth-cookie.middleware';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { CourseModule } from './courses/courses.module';
import { CourseController } from './courses/courses.controller';
import { ForumModule } from './forums/forums.module';
import { ForumController } from './forums/forums.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', `.env.${process.env.NODE_ENV}`],
      load: [configuration],
      validationSchema: configValidationSchema,
      validationOptions: {
        convert: true,
        allowUnknown: true,
        abortEarly: true,
      },
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'www-client'),
      exclude: ['/api/(.*)', '/storage/(.*)', '/samlLogin', '/log-out'],
    }),

    PrismaModule,
    AuthModule,
    UserModule,
    CourseModule,
    ForumModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCookieMiddleware)
      .exclude(
        { path: '/auth/login', method: RequestMethod.POST },
        { path: '/auth/logout', method: RequestMethod.DELETE },
        { path: '/auth/check', method: RequestMethod.POST },
      )
      .forRoutes(
        AuthController,
        UserController,
        CourseController,
        ForumController,
      );
  }
}
