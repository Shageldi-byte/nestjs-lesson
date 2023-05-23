import * as path from 'path';
import * as sharp from 'sharp';
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SharpPipe
  implements PipeTransform<Express.Multer.File, Promise<string>>
{
  async transform(image: Express.Multer.File): Promise<string> {
    console.log(image);
    const originalName = path.parse(image.originalname).name;
    const filename = 'resized-' + Date.now() + '-' + originalName + '.webp';

    await sharp(image.path)
      .resize(800)
      .webp({ effort: 3 })
      .toFile(path.join('upload', filename));

    return filename;
  }
}
