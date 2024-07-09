import { Test, TestingModule } from '@nestjs/testing';
import { AgronomicActivitiesController } from './agronomic_activities.controller';
import { AgronomicActivitiesService } from './agronomic_activities.service';

describe('AgronomicActivitiesController', () => {
  let controller: AgronomicActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgronomicActivitiesController],
      providers: [AgronomicActivitiesService],
    }).compile();

    controller = module.get<AgronomicActivitiesController>(AgronomicActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
