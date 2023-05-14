import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

type ProductStatus = 'PENDING' | 'ACCEPTED' | 'CANCELED';

const statuses = ['PENDING', 'ACCEPTED', 'CANCELED'];

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsIn(statuses)
  status: ProductStatus;
}
