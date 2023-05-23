import { AccessKeyGuard } from 'src/guard/access-key.guard';
import { CustomPipeValidation } from './custom.pipe';
import { CreateLessonPipeDto } from './dto/create-lesson-pipe.dto';
import { UpdateLessonPipeDto } from './dto/update-lesson-pipe.dto';
import { LessonPipesService } from './lesson-pipes.service';
import { PhoneNumberPipe } from './phone-number.pipe';

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

@Controller('lesson-pipes')
@UseGuards(AccessKeyGuard)
export class LessonPipesController {
  constructor(private readonly lessonPipesService: LessonPipesService) {}

  @Post()
  create(@Body() createLessonPipeDto: CreateLessonPipeDto) {
    return this.lessonPipesService.create(createLessonPipeDto);
  }

  @Get()
  findAll() {
    return this.lessonPipesService.findAll();
  }

  @Get(':phone')
  findOne(@Param('phone', PhoneNumberPipe) phone: string) {
    return phone;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLessonPipeDto: UpdateLessonPipeDto,
  ) {
    return this.lessonPipesService.update(+id, updateLessonPipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonPipesService.remove(+id);
  }
}
