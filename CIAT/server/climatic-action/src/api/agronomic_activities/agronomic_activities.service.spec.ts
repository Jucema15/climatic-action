import { Test, TestingModule } from '@nestjs/testing';
import { AgronomicActivitiesService } from './agronomic_activities.service';

describe('AgronomicActivitiesService', () => {
  let service: AgronomicActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgronomicActivitiesService],
    }).compile();

    service = module.get<AgronomicActivitiesService>(AgronomicActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
