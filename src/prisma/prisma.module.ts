import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// src/prisma/prisma.module.ts

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
