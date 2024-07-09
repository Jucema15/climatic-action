import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitieTypeService } from './activitie_type.service';
import { CreateActivitieTypeDto } from './dto/create-activitie_type.dto';
import { UpdateActivitieTypeDto } from './dto/update-activitie_type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Activitie Type')
@Controller('activitie-type')
export class ActivitieTypeController {
  constructor(private readonly activitieTypeService: ActivitieTypeService) {}

  @Post()
  create(@Body() createActivitieTypeDto: CreateActivitieTypeDto) {
    return this.activitieTypeService.create(createActivitieTypeDto);
  }

  @Get()
  findAll() {
    return this.activitieTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitieTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivitieTypeDto: CreateActivitieTypeDto) {
    return this.activitieTypeService.update(+id, updateActivitieTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitieTypeService.remove(+id);
  }
}
