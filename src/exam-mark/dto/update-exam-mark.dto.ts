import { PartialType } from '@nestjs/mapped-types';
import { CreateExamMarkDto } from './create-exam-mark.dto';

export class UpdateExamMarkDto extends PartialType(CreateExamMarkDto) {}
