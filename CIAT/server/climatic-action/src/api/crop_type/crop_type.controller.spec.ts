import { Test, TestingModule } from '@nestjs/testing';
import { CropTypeController } from './crop_type.controller';
import { CropTypeService } from './crop_type.service';

describe('CropTypeController', () => {
  let controller: CropTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CropTypeController],
      providers: [CropTypeService],
    }).compile();

    controller = module.get<CropTypeController>(CropTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
