import { Injectable } from '@nestjs/common';
import { CreateAgronomicActivityDto } from './dto/create-agronomic_activity.dto';
import { UpdateAgronomicActivityDto } from './dto/update-agronomic_activity.dto';
import { DataSource } from 'typeorm';
import { AgronomicActivity } from './entities/agronomic_activity.entity';

@Injectable()
export class AgronomicActivitiesService {
  constructor(private readonly dataSource: DataSource) {}
  create(createAgronomicActivityDto: CreateAgronomicActivityDto) {
    return this.dataSource
      .getRepository(AgronomicActivity)
      .save(createAgronomicActivityDto);
  }

  findAll() {
    return this.dataSource.getRepository(AgronomicActivity).find();
  }

  findOne(id: number) {
    return this.dataSource.getRepository(AgronomicActivity).findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateAgronomicActivityDto: UpdateAgronomicActivityDto) {
    return this.dataSource.getRepository(AgronomicActivity).update(id, {
      start_date: updateAgronomicActivityDto.start_date,
      end_date: updateAgronomicActivityDto.end_date,
      user_id: updateAgronomicActivityDto.user_id,
      plot_id: updateAgronomicActivityDto.plot_id,
      activitie_type_id: updateAgronomicActivityDto.activitie_type_id,
    });
  }

  remove(id: number) {
    return this.dataSource.getRepository(AgronomicActivity).delete(id);
  }
}
