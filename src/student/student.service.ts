import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  findAll() {
    return this.prisma.student.findMany({
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
      include: {
        ExamMark: true,
        group: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.student.findFirst({
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
      include: {
        ExamMark: true,
        group: true,
      },
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateStudentDto: CreateStudentDto) {
    return this.prisma.student.update({
      data: updateStudentDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.student.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
