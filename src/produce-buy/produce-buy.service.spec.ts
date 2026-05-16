import { Test, TestingModule } from '@nestjs/testing';
import { ProduceBuyService } from './produce-buy.service';

describe('ProduceBuyService', () => {
  let service: ProduceBuyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduceBuyService],
    }).compile();

    service = module.get<ProduceBuyService>(ProduceBuyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
