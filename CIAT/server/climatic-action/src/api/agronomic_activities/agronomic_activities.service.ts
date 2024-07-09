import { Injectable } from '@nestjs/common';
import { CreateAgronomicActivityDto } from './dto/create-agronomic_activity.dto';
import { UpdateAgronomicActivityDto } from './dto/update-agronomic_activity.dto';

@Injectable()
export class AgronomicActivitiesService {
  create(createAgronomicActivityDto: CreateAgronomicActivityDto) {
    return 'This action adds a new agronomicActivity';
  }

  findAll() {
    return `This action returns all agronomicActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agronomicActivity`;
  }

  update(id: number, updateAgronomicActivityDto: UpdateAgronomicActivityDto) {
    return `This action updates a #${id} agronomicActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} agronomicActivity`;
  }
}
