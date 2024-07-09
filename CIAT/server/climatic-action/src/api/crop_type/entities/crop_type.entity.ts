import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crop_type')
export class CropType {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 45,
    name: 'name',
  })
  name: string;
}
