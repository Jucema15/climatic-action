import { Test, TestingModule } from '@nestjs/testing';
import { AgronomicActivitieSuppliesController } from './agronomic_activitie_supplies.controller';
import { AgronomicActivitieSuppliesService } from './agronomic_activitie_supplies.service';

describe('AgronomicActivitieSuppliesController', () => {
  let controller: AgronomicActivitieSuppliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgronomicActivitieSuppliesController],
      providers: [AgronomicActivitieSuppliesService],
    }).compile();

    controller = module.get<AgronomicActivitieSuppliesController>(AgronomicActivitieSuppliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
