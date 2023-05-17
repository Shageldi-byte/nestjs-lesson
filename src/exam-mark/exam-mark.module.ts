import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ExamMarkController } from './exam-mark.controller';
import { ExamMarkService } from './exam-mark.service';

@Module({
  controllers: [ExamMarkController],
  providers: [ExamMarkService],
  imports: [PrismaModule],
})
export class ExamMarkModule {}
