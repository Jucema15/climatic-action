import { PartialType } from '@nestjs/swagger';
import { CreateCropTypeDto } from './create-crop_type.dto';

export class UpdateCropTypeDto extends PartialType(CreateCropTypeDto) {}
