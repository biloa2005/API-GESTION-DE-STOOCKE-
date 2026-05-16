import { Test, TestingModule } from '@nestjs/testing';
import { ProductRuinService } from './product-ruin.service';

describe('ProductRuinService', () => {
  let service: ProductRuinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRuinService],
    }).compile();

    service = module.get<ProductRuinService>(ProductRuinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
