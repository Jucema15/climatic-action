import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CropTypeService } from './crop_type.service';
import { CreateCropTypeDto } from './dto/create-crop_type.dto';
import { UpdateCropTypeDto } from './dto/update-crop_type.dto';

@Controller('crop-type')
export class CropTypeController {
  constructor(private readonly cropTypeService: CropTypeService) {}

  @Post()
  create(@Body() createCropTypeDto: CreateCropTypeDto) {
    return this.cropTypeService.create(createCropTypeDto);
  }

  @Get()
  findAll() {
    return this.cropTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cropTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCropTypeDto: UpdateCropTypeDto) {
    return this.cropTypeService.update(+id, updateCropTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cropTypeService.remove(+id);
  }
}
