import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExamMarkDto } from './dto/create-exam-mark.dto';
import { UpdateExamMarkDto } from './dto/update-exam-mark.dto';

@Injectable()
export class ExamMarkService {
  constructor(private readonly prisma: PrismaService) {}

  create(createExamMarkDto: CreateExamMarkDto) {
    return this.prisma.examMark.create({
      data: createExamMarkDto,
    });
  }

  findAll() {
    return this.prisma.examMark.findMany({
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
      include: {
        exam: true,
        student: true,
      },
    });
  }
}
