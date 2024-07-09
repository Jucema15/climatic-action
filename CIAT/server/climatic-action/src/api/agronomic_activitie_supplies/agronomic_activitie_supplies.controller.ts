import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgronomicActivitieSuppliesService } from './agronomic_activitie_supplies.service';
import { CreateAgronomicActivitieSupplyDto } from './dto/create-agronomic_activitie_supply.dto';
import { UpdateAgronomicActivitieSupplyDto } from './dto/update-agronomic_activitie_supply.dto';

@Controller('agronomic-activitie-supplies')
export class AgronomicActivitieSuppliesController {
  constructor(private readonly agronomicActivitieSuppliesService: AgronomicActivitieSuppliesService) {}

  @Post()
  create(@Body() createAgronomicActivitieSupplyDto: CreateAgronomicActivitieSupplyDto) {
    return this.agronomicActivitieSuppliesService.create(createAgronomicActivitieSupplyDto);
  }

  @Get()
  findAll() {
    return this.agronomicActivitieSuppliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agronomicActivitieSuppliesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgronomicActivitieSupplyDto: UpdateAgronomicActivitieSupplyDto) {
    return this.agronomicActivitieSuppliesService.update(+id, updateAgronomicActivitieSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agronomicActivitieSuppliesService.remove(+id);
  }
}
