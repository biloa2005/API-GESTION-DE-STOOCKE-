import { Module } from '@nestjs/common';
import { MydebtController } from './mydebt.controller';
import { MydebtService } from './mydebt.service';

@Module({
  controllers: [MydebtController],
  providers: [MydebtService]
})
export class MydebtModule {}
