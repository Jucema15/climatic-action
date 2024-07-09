import { PartialType } from '@nestjs/swagger';
import { CreateAgronomicActivityDto } from './create-agronomic_activity.dto';

export class UpdateAgronomicActivityDto extends PartialType(CreateAgronomicActivityDto) {}
