import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 45,
    name: 'first_name',
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 45,
    name: 'last_name',
  })
  last_name: string;
}
