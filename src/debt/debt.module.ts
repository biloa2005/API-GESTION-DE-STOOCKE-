import { Module } from '@nestjs/common';
import { DebtService } from './debt.service';
import { DebtController } from './debt.controller';
import {Debt} from "./debt.entity"
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitService } from 'src/produit/produit.service';
import { ProduitModule } from 'src/produit/produit.module';
import { ProduceDebtModule } from 'src/produce-debt/produce-debt.module';
import { HistoricalModule } from 'src/historical/historical.module';
@Module({
  providers: [DebtService],
  controllers: [DebtController],
  
  imports:[TypeOrmModule.forFeature([Debt]),ProduitModule,ProduceDebtModule,HistoricalModule]
})
export class DebtModule {}
