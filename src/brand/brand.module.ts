import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  controllers: [BrandController],
  providers: [BrandService],
  imports: [PrismaModule],
})
export class BrandModule {}
