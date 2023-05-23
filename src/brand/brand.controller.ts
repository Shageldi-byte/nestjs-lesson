import { diskStorage } from 'multer';
import { Roles } from 'src/decorator/roles.decorator';
import { editFileName } from 'src/helper/file.helper';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { SharpPipe } from './shar.pipe';

import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';

import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: editFileName,
      }),
    }),
  )
  create(
    @UploadedFile(SharpPipe) image: string,
    @Body() createBrandDto: CreateBrandDto,
  ) {
    createBrandDto.image = image;
    return this.brandService.create(createBrandDto);
  }

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: './upload',
        filename: editFileName,
      }),
    }),
  )
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.brandService.createMultipelFiles(files);
  }

  @Post('upload-fields')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image_tm', maxCount: 1 },
      { name: 'image_ru', maxCount: 1 },
      { name: 'image_en', maxCount: 1 },
    ]),
  )
  uploadFields(
    @UploadedFiles()
    files: {
      image_tm?: Express.Multer.File[];
      image_ru?: Express.Multer.File[];
      image_en?: Express.Multer.File[];
    },
  ) {
    return files;
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
