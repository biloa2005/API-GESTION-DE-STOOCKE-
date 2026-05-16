import { Test, TestingModule } from '@nestjs/testing';
import { ProduceDebtService } from './produce-debt.service';

describe('ProduceDebtService', () => {
  let service: ProduceDebtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduceDebtService],
    }).compile();

    service = module.get<ProduceDebtService>(ProduceDebtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
