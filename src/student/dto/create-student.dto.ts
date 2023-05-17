import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsNumber()
  @IsNotEmpty()
  student_id: number;

  @IsNumber()
  @IsNotEmpty()
  groupId: number;
}
