import { Module } from '@nestjs/common';
import { AgronomicActivitiesService } from './agronomic_activities.service';
import { AgronomicActivitiesController } from './agronomic_activities.controller';

@Module({
  controllers: [AgronomicActivitiesController],
  providers: [AgronomicActivitiesService],
})
export class AgronomicActivitiesModule {}
