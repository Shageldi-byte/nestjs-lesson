import { Module } from '@nestjs/common';
import { LessonPipesService } from './lesson-pipes.service';
import { LessonPipesController } from './lesson-pipes.controller';

@Module({
  controllers: [LessonPipesController],
  providers: [LessonPipesService]
})
export class LessonPipesModule {}
