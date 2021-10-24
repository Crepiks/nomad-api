import { Test, TestingModule } from '@nestjs/testing';
import { ExplanationsService } from './explanations.service';

describe('ExplanationsService', () => {
  let service: ExplanationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExplanationsService],
    }).compile();

    service = module.get<ExplanationsService>(ExplanationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
