import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activitie_type')
export class ActivitieType {
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
