import { ActivitieType } from 'src/api/activitie_type/entities/activitie_type.entity';
import { Plot } from 'src/api/plots/entities/plot.entity';
import { User } from 'src/api/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('agronomic_activities')
export class AgronomicActivity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'datetime',
    name: 'start_date',
  })
  start_date: Date;

  @Column({
    type: 'datetime',
    name: 'end_date',
  })
  end_date: Date;

  @Column({
    type: 'int',
    name: 'user_id',
  })
  user_id: number;

  @Column({
    type: 'int',
    name: 'plot_id',
  })
  plot_id: number;

  @Column({
    type: 'int',
    name: 'activitie_type_id',
  })
  activitie_type_id: number;

  //
  @ManyToOne(() => Plot, (p) => p.id)
  @JoinColumn({
    name: 'plot_id',
  })
  plot: Plot;

  @ManyToOne(() => User, (u) => u.id)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @ManyToOne(() => ActivitieType, (at) => at.id)
  @JoinColumn({
    name: 'activitie_type_id',
  })
  activitie_type: ActivitieType;
}
