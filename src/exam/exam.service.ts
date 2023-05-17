import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';

@Injectable()
export class ExamService {
  constructor(private readonly prisma: PrismaService) {}

  create(createExamDto: CreateExamDto) {
    return this.prisma.exam.create({
      data: createExamDto,
    });
  }

  findAll() {
    return this.prisma.exam.findMany({
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
      include: {
        ExamMark: {
          include: {
            student: {
              select: {
                fullname: true,
              },
            },
          },
        },
      },
    });
  }

  update(id: number, updateExamDto: CreateExamDto) {
    return this.prisma.exam.update({
      data: updateExamDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.exam.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
