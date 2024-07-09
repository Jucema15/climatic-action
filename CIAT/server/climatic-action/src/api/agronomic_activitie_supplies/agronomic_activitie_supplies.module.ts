import { Module } from '@nestjs/common';
import { AgronomicActivitieSuppliesService } from './agronomic_activitie_supplies.service';
import { AgronomicActivitieSuppliesController } from './agronomic_activitie_supplies.controller';

@Module({
  controllers: [AgronomicActivitieSuppliesController],
  providers: [AgronomicActivitieSuppliesService],
})
export class AgronomicActivitieSuppliesModule {}
