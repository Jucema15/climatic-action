import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { Supply } from './entities/supply.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class SuppliesService {
  constructor(private readonly dataSource: DataSource) {}

  create(createSupplyDto: CreateSupplyDto) {
    return this.dataSource.getRepository(Supply).save(createSupplyDto);
  }

  findAll() {
    return this.dataSource
      .getRepository(Supply)
      .find()
      .catch((err) => ({ data: null, error: err }));
  }

  findOne(id: number) {
    return this.dataSource
      .getRepository(Supply)
      .findOne({
        where: {
          id: id,
        },
      })
      .catch((err) => ({ data: null, error: err }));
  }

  update(id: number, updateSupplyDto: CreateSupplyDto) {
    return this.dataSource
      .getRepository(Supply)
      .update(id, {
        name: updateSupplyDto.name,
        unit: updateSupplyDto.unit,
      })
      .catch((err) => ({ data: null, error: err }));
  }

  remove(id: number) {
    return this.dataSource
      .getRepository(Supply)
      .delete(id)
      .catch((err) => ({ data: null, error: err }));
  }
}
