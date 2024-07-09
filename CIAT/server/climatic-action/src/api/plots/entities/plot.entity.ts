import { CropType } from 'src/api/crop_type/entities/crop_type.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('plots')
export class Plot {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 45,
    name: 'lat',
  })
  lat: string;

  @Column({
    type: 'varchar',
    length: 45,
    name: 'long',
  })
  long: string;

  @Column({
    type: 'varchar',
    length: 45,
    name: 'size',
  })
  size: string;

  @Column({
    type: 'int',
    name: 'crop_id',
  })
  crop_id: number;

  @ManyToOne(() => CropType, (c) => c.id)
  @JoinColumn({
    name: 'crop_id',
  })
  crop: CropType;
}
