import { Injectable } from '@nestjs/common';
import { CreatePlotDto } from './dto/create-plot.dto';
import { DataSource } from 'typeorm';
import { Plot } from './entities/plot.entity';

@Injectable()
export class PlotsService {
  constructor(private readonly dataSource: DataSource) {}

  create(createPlotDto: CreatePlotDto) {
    return this.dataSource
      .getRepository(Plot)
      .save(createPlotDto)
      .catch((err) => ({ data: null, error: err }));
  }

  findAll() {
    return this.dataSource
      .getRepository(Plot)
      .find()
      .catch((err) => ({ data: null, error: err }));
  }

  findOne(id: number) {
    return this.dataSource
      .getRepository(Plot)
      .findOne({
        where: {
          id: id,
        },
      })
      .catch((err) => ({ data: null, error: err }));
  }

  update(id: number, updatePlotDto: CreatePlotDto) {
    return this.dataSource
      .getRepository(Plot)
      .update(id, {
        crop_id: updatePlotDto.crop_id,
        lat: updatePlotDto.lat,
        long: updatePlotDto.long,
        size: updatePlotDto.size,
      })
      .catch((err) => ({ data: null, error: err }));
  }

  remove(id: number) {
    return this.dataSource.getRepository(Plot).delete(id);
  }
}
