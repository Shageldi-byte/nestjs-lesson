import { ArticleStatus } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  description: string;
  @IsString()
  @IsNotEmpty()
  body: string;
  status: ArticleStatus = 'PENDING';
}
