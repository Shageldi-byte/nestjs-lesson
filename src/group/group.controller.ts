import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupService } from './group.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('create-group')
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get('get-all-groups')
  findAll() {
    return this.groupService.findAll();
  }

  @Patch('update-group/:id')
  update(@Param('id') id: string, @Body() updateGroupDto: CreateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete('delete-group/:id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}
