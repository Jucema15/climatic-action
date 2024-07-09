import { Injectable } from '@nestjs/common';
import { CreateActivitieTypeDto } from './dto/create-activitie_type.dto';
import { DataSource } from 'typeorm';
import { ActivitieType } from './entities/activitie_type.entity';

@Injectable()
export class ActivitieTypeService {
  constructor(private readonly dataSource: DataSource) {}

  create(createActivitieTypeDto: CreateActivitieTypeDto) {
    return this.dataSource
      .getRepository(ActivitieType)
      .save(createActivitieTypeDto)
      .catch((err) => ({ data: null, error: err }));
  }

  findAll() {
    return this.dataSource
      .getRepository(ActivitieType)
      .find()
      .catch((err) => ({ data: null, error: err }));
  }

  findOne(id: number) {
    return this.dataSource
      .getRepository(ActivitieType)
      .findOne({
        where: {
          id: id,
        },
      })
      .catch((err) => ({ data: null, error: err }));
  }

  update(id: number, updateActivitieTypeDto: CreateActivitieTypeDto) {
    return this.dataSource
      .getRepository(ActivitieType)
      .update(id, {
        name: updateActivitieTypeDto.name,
      })
      .catch((err) => ({ data: null, error: err }));
  }

  remove(id: number) {
    return this.dataSource
      .getRepository(ActivitieType)
      .delete(id)
      .catch((err) => ({ data: null, error: err }));
  }
}
