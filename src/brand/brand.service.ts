import createMultipelFilesDto from './dto/create-multiple-image.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    return this.prisma.brand.create({
      data: createBrandDto,
    });
  }

  findAll() {
    return this.prisma.brand.findMany({
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  createMultipelFiles(files: Array<Express.Multer.File>) {
    const images: createMultipelFilesDto[] = [];
    files.forEach((file) => {
      const t = new createMultipelFilesDto();
      t.image = file.path;
      images.push(t);
    });
    return this.prisma.images.createMany({
      data: images,
    });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
