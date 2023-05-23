import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonPipeDto } from './create-lesson-pipe.dto';

export class UpdateLessonPipeDto extends PartialType(CreateLessonPipeDto) {}
