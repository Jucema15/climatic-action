import { Injectable } from '@nestjs/common';
import { CreateCropTypeDto } from './dto/create-crop_type.dto';
import { DataSource } from 'typeorm';
import { CropType } from './entities/crop_type.entity';

@Injectable()
export class CropTypeService {
  constructor(private readonly dataSource: DataSource) {}

  create(createCropTypeDto: CreateCropTypeDto) {
    return this.dataSource.getRepository(CropType).save(createCropTypeDto);
  }

  findAll() {
    return this.dataSource.getRepository(CropType).find();
  }

  findOne(id: number) {
    return this.dataSource.getRepository(CropType).findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateCropTypeDto: CreateCropTypeDto) {
    return this.dataSource.getRepository(CropType).update(id, {
      name: updateCropTypeDto.name,
    });
  }

  remove(id: number) {
    return this.dataSource.getRepository(CropType).delete(id);
  }
}
