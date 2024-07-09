import { Test, TestingModule } from '@nestjs/testing';
import { ActivitieTypeController } from './activitie_type.controller';
import { ActivitieTypeService } from './activitie_type.service';

describe('ActivitieTypeController', () => {
  let controller: ActivitieTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivitieTypeController],
      providers: [ActivitieTypeService],
    }).compile();

    controller = module.get<ActivitieTypeController>(ActivitieTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
