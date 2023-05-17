import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsModule } from './logs/logs.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ProductsModule } from './products/products.module';
import { ArticleModule } from './article/article.module';
import { GroupModule } from './group/group.module';
import { ExamModule } from './exam/exam.module';
import { StudentModule } from './student/student.module';
import { ExamMarkModule } from './exam-mark/exam-mark.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProductsModule, LogsModule, ArticleModule, GroupModule, ExamModule, StudentModule, ExamMarkModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
