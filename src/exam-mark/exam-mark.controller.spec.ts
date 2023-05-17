import { Test, TestingModule } from '@nestjs/testing';
import { ExamMarkController } from './exam-mark.controller';
import { ExamMarkService } from './exam-mark.service';

describe('ExamMarkController', () => {
  let controller: ExamMarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamMarkController],
      providers: [ExamMarkService],
    }).compile();

    controller = module.get<ExamMarkController>(ExamMarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
