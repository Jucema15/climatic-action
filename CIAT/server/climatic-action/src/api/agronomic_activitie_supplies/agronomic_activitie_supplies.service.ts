import { Injectable } from '@nestjs/common';
import { CreateAgronomicActivitieSupplyDto } from './dto/create-agronomic_activitie_supply.dto';
import { UpdateAgronomicActivitieSupplyDto } from './dto/update-agronomic_activitie_supply.dto';

@Injectable()
export class AgronomicActivitieSuppliesService {
  create(createAgronomicActivitieSupplyDto: CreateAgronomicActivitieSupplyDto) {
    return 'This action adds a new agronomicActivitieSupply';
  }

  findAll() {
    return `This action returns all agronomicActivitieSupplies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agronomicActivitieSupply`;
  }

  update(id: number, updateAgronomicActivitieSupplyDto: UpdateAgronomicActivitieSupplyDto) {
    return `This action updates a #${id} agronomicActivitieSupply`;
  }

  remove(id: number) {
    return `This action removes a #${id} agronomicActivitieSupply`;
  }
}
