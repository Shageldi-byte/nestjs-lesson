import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class PhoneNumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    const error = new HttpException(
      'Phone number is not valid',
      HttpStatus.NOT_ACCEPTABLE,
      {
        description: 'Phone number is not valid',
      },
    );

    try {
      const phone = `${value}`;
      if (phone.startsWith('+993') && phone.length === 12) {
        return phone;
      } else {
        if (phone.startsWith('8') && phone.length === 9) {
          return `+993${phone.substring(1)}`;
        } else if (phone.length === 8) {
          return `+993${phone}`;
        } else {
          throw error;
        }
      }
    } catch (err) {
      throw error;
    }
  }
}
