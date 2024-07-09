import { PartialType } from '@nestjs/swagger';
import { CreateActivitieTypeDto } from './create-activitie_type.dto';

export class UpdateActivitieTypeDto extends PartialType(CreateActivitieTypeDto) {}
