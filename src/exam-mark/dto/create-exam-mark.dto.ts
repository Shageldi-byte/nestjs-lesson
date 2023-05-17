import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateExamMarkDto {
  @IsNumber()
  @IsNotEmpty()
  studentId: number;

  @IsNumber()
  @IsNotEmpty()
  examId: number;

  @IsNumber()
  @IsNotEmpty()
  point: number;
}
