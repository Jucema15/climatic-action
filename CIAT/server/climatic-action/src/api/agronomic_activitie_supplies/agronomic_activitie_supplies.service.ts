import { Injectable } from '@nestjs/common';
import { CreateAgronomicActivitieSupplyDto } from './dto/create-agronomic_activitie_supply.dto';
import { UpdateAgronomicActivitieSupplyDto } from './dto/update-agronomic_activitie_supply.dto';
import { DataSource } from 'typeorm';
import { AgronomicActivitieSupply } from './entities/agronomic_activitie_supply.entity';

@Injectable()
export class AgronomicActivitieSuppliesService {
  constructor(private readonly dataSource: DataSource) {}

  create(createAgronomicActivitieSupplyDto: CreateAgronomicActivitieSupplyDto) {
    return this.dataSource
      .getRepository(AgronomicActivitieSupply)
      .save(createAgronomicActivitieSupplyDto);
  }

  findAll() {
    return this.dataSource.getMongoRepository(AgronomicActivitieSupply).find();
  }

  findOne(id: number) {
    return this.dataSource
      .getMongoRepository(AgronomicActivitieSupply)
      .findOne({
        where: {
          id: id,
        },
      });
  }

  update(
    id: number,
    updateAgronomicActivitieSupplyDto: UpdateAgronomicActivitieSupplyDto,
  ) {
    return this.dataSource.getRepository(AgronomicActivitieSupply).update(id, {
      amount: updateAgronomicActivitieSupplyDto.amount,
      supplies_id: updateAgronomicActivitieSupplyDto.supplies_id,
      agronomic_activities_id:
        updateAgronomicActivitieSupplyDto.agronomic_activities_id,
    });
  }

  remove(id: number) {
    return this.dataSource.getRepository(AgronomicActivitieSupply).delete(id);
  }
}
