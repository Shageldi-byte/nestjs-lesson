import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExamDto {
  @IsString()
  @IsNotEmpty()
  exam_name: string;

  @IsString()
  exam_description = '';

  @IsString()
  @IsNotEmpty()
  teacher_name: string;
}
