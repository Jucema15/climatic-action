import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('supplies')
export class Supply {
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

  @Column({
    type: 'varchar',
    length: 45,
    name: 'unit',
  })
  unit: string;
}
