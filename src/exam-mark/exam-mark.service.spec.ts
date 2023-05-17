import { Test, TestingModule } from '@nestjs/testing';
import { ExamMarkService } from './exam-mark.service';

describe('ExamMarkService', () => {
  let service: ExamMarkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamMarkService],
    }).compile();

    service = module.get<ExamMarkService>(ExamMarkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
