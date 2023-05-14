import { Injectable } from '@nestjs/common';
import { LogsService } from 'src/logs/logs.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly log: LogsService) {}

  async create(createProductDto: CreateProductDto) {
    return createProductDto.name;
  }

  findAll() {
    const logs = this.log.findAll();
    return {
      logs,
      products: 'This action returns all product',
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
