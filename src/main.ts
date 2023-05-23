import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerGuard } from './guard/logger.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new LoggerGuard());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
