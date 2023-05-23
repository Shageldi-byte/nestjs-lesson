import { Test, TestingModule } from '@nestjs/testing';
import { LessonPipesService } from './lesson-pipes.service';

describe('LessonPipesService', () => {
  let service: LessonPipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonPipesService],
    }).compile();

    service = module.get<LessonPipesService>(LessonPipesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
