import { Module } from '@nestjs/common';
import { ActivitieTypeService } from './activitie_type.service';
import { ActivitieTypeController } from './activitie_type.controller';

@Module({
  controllers: [ActivitieTypeController],
  providers: [ActivitieTypeService],
})
export class ActivitieTypeModule {}
