import { Module } from '@nestjs/common';
import { MydebtController } from './mydebt.controller';
import { MydebtService } from './mydebt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyDebt } from './mydebt.entity';

@Module({
  controllers: [MydebtController],
  providers: [MydebtService],
  imports:[TypeOrmModule.forFeature([MyDebt])]
})
export class MydebtModule {}
