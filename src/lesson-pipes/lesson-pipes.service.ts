import { Injectable } from '@nestjs/common';
import { CreateLessonPipeDto } from './dto/create-lesson-pipe.dto';
import { UpdateLessonPipeDto } from './dto/update-lesson-pipe.dto';

@Injectable()
export class LessonPipesService {
  create(createLessonPipeDto: CreateLessonPipeDto) {
    return 'This action adds a new lessonPipe';
  }

  findAll() {
    return `This action returns all lessonPipes`;
  }

  findOne(id: number) {
    return id * 2;
  }

  update(id: number, updateLessonPipeDto: UpdateLessonPipeDto) {
    return `This action updates a #${id} lessonPipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} lessonPipe`;
  }
}
