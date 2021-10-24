import { Test, TestingModule } from '@nestjs/testing';
import { ExplanationsController } from './explanations.controller';
import { ExplanationsService } from '../domain/explanations.service';

describe('ExplanationsController', () => {
  let controller: ExplanationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExplanationsController],
      providers: [ExplanationsService],
    }).compile();

    controller = module.get<ExplanationsController>(ExplanationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
