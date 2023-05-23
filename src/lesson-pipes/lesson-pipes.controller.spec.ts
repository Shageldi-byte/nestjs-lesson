import { Test, TestingModule } from '@nestjs/testing';
import { LessonPipesController } from './lesson-pipes.controller';
import { LessonPipesService } from './lesson-pipes.service';

describe('LessonPipesController', () => {
  let controller: LessonPipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonPipesController],
      providers: [LessonPipesService],
    }).compile();

    controller = module.get<LessonPipesController>(LessonPipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
