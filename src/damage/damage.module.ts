import { Module } from '@nestjs/common';
import { DamageService } from './damage.service';
import { DamageController } from './damage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Damage} from "./damage.entity"
import { ProduceDebtModule } from 'src/produce-debt/produce-debt.module';
import { ProductRuinModule } from 'src/product-ruin/product-ruin.module';
import { ProduitModule } from 'src/produit/produit.module';
@Module({
  providers: [DamageService],
  controllers: [DamageController],
  imports:[TypeOrmModule.forFeature([Damage]),ProduceDebtModule,ProductRuinModule,ProduitModule]
})
export class DamageModule {}
