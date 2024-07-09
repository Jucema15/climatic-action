import { Test, TestingModule } from '@nestjs/testing';
import { ActivitieTypeService } from './activitie_type.service';

describe('ActivitieTypeService', () => {
  let service: ActivitieTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitieTypeService],
    }).compile();

    service = module.get<ActivitieTypeService>(ActivitieTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
