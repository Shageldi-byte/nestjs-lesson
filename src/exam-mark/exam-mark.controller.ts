import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateExamMarkDto } from './dto/create-exam-mark.dto';
import { UpdateExamMarkDto } from './dto/update-exam-mark.dto';
import { ExamMarkService } from './exam-mark.service';

@Controller('exam-mark')
export class ExamMarkController {
  constructor(private readonly examMarkService: ExamMarkService) {}

  @Post()
  create(@Body() createExamMarkDto: CreateExamMarkDto) {
    return this.examMarkService.create(createExamMarkDto);
  }

  @Get()
  findAll() {
    return this.examMarkService.findAll();
  }
}
