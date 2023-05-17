import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({
      data: createGroupDto,
    });
  }

  findAll() {
    return this.prisma.group.findMany({
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
    });
  }

  update(id: number, updateGroupDto: CreateGroupDto) {
    return this.prisma.group.update({
      data: updateGroupDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    try {
      return this.prisma.group.deleteMany({
        where: {
          id: id,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
