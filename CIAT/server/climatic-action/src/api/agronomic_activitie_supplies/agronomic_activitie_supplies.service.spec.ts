import { Test, TestingModule } from '@nestjs/testing';
import { AgronomicActivitieSuppliesService } from './agronomic_activitie_supplies.service';

describe('AgronomicActivitieSuppliesService', () => {
  let service: AgronomicActivitieSuppliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgronomicActivitieSuppliesService],
    }).compile();

    service = module.get<AgronomicActivitieSuppliesService>(AgronomicActivitieSuppliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
