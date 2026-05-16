import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduceDebt } from 'src/produce-debt/produce-debt.entity';


@Module({
    imports:[TypeOrmModule.forFeature([ProduceDebt])]
})
export class DebtHistoricalModule {

}
