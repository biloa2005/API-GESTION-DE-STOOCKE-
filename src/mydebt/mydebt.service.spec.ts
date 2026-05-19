import { Test, TestingModule } from '@nestjs/testing';
import { MydebtService } from './mydebt.service';

describe('MydebtService', () => {
  let service: MydebtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MydebtService],
    }).compile();

    service = module.get<MydebtService>(MydebtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
