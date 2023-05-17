import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';

@Module({
  controllers: [ExamController],
  providers: [ExamService],
  imports: [PrismaModule],
})
export class ExamModule {}
