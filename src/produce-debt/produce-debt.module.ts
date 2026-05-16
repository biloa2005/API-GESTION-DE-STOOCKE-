import { Module } from '@nestjs/common';
import { ProduceDebtService } from './produce-debt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduceDebt } from './produce-debt.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProduceDebt])],
  providers: [ProduceDebtService],
  exports:[ProduceDebtService]
})
export class ProduceDebtModule {}
