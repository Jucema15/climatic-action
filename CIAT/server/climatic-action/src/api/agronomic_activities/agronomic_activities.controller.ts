import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgronomicActivitiesService } from './agronomic_activities.service';
import { CreateAgronomicActivityDto } from './dto/create-agronomic_activity.dto';
import { UpdateAgronomicActivityDto } from './dto/update-agronomic_activity.dto';

@Controller('agronomic-activities')
export class AgronomicActivitiesController {
  constructor(private readonly agronomicActivitiesService: AgronomicActivitiesService) {}

  @Post()
  create(@Body() createAgronomicActivityDto: CreateAgronomicActivityDto) {
    return this.agronomicActivitiesService.create(createAgronomicActivityDto);
  }

  @Get()
  findAll() {
    return this.agronomicActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agronomicActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgronomicActivityDto: UpdateAgronomicActivityDto) {
    return this.agronomicActivitiesService.update(+id, updateAgronomicActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agronomicActivitiesService.remove(+id);
  }
}
