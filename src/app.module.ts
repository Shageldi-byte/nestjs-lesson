import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { jwtConstants } from './auth/constant';
import { BrandModule } from './brand/brand.module';
import { ExamMarkModule } from './exam-mark/exam-mark.module';
import { ExamModule } from './exam/exam.module';
import { GroupModule } from './group/group.module';
import { LessonPipesModule } from './lesson-pipes/lesson-pipes.module';
import { LogsModule } from './logs/logs.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ProductsModule } from './products/products.module';
import { StudentModule } from './student/student.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    ProductsModule,
    LogsModule,
    ArticleModule,
    GroupModule,
    ExamModule,
    StudentModule,
    ExamMarkModule,
    BrandModule,
    LessonPipesModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
