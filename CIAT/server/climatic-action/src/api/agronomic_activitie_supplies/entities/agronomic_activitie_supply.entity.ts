import { AgronomicActivity } from 'src/api/agronomic_activities/entities/agronomic_activity.entity';
import { Supply } from 'src/api/supplies/entities/supply.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('agronomic_activitie_supply')
export class AgronomicActivitieSupply {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'int',
    name: 'amount',
  })
  amount: number;

  @Column({
    type: 'int',
    name: 'supplies_id',
  })
  supplies_id: number;

  @Column({
    type: 'int',
    name: 'agronomic_activities_id',
  })
  agronomic_activities_id: number;

  @ManyToOne(() => Supply, (supp) => supp.id)
  @JoinColumn({
    name: 'supplies_id',
  })
  supplies: Supply;

  @ManyToOne(() => AgronomicActivity, (ac) => ac.id)
  @JoinColumn({
    name: 'agronomic_activities_id',
  })
  agronomic_activities: AgronomicActivity;
}
