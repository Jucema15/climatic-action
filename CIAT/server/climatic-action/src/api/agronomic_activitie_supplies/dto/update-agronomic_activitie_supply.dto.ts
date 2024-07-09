import { PartialType } from '@nestjs/swagger';
import { CreateAgronomicActivitieSupplyDto } from './create-agronomic_activitie_supply.dto';

export class UpdateAgronomicActivitieSupplyDto extends PartialType(CreateAgronomicActivitieSupplyDto) {}
