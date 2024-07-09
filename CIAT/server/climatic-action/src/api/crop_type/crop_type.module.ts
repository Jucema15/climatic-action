import { Module } from '@nestjs/common';
import { CropTypeService } from './crop_type.service';
import { CropTypeController } from './crop_type.controller';

@Module({
  controllers: [CropTypeController],
  providers: [CropTypeService],
})
export class CropTypeModule {}
