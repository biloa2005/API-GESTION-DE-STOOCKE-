import { Test, TestingModule } from '@nestjs/testing';
import { MydebtController } from './mydebt.controller';

describe('MydebtController', () => {
  let controller: MydebtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MydebtController],
    }).compile();

    controller = module.get<MydebtController>(MydebtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
