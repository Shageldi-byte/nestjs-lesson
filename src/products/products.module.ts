import { Module } from '@nestjs/common';
import { LogsModule } from 'src/logs/logs.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [LogsModule],
})
export class ProductsModule {}
