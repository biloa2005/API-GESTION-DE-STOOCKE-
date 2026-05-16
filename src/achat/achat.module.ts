import { Module } from '@nestjs/common';
import { AchatController } from './achat.controller';
import { AchatService } from './achat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Achat} from './achat.entity'
import { ProduitModule } from 'src/produit/produit.module';
import { ProduceBuyModule } from 'src/produce-buy/produce-buy.module';

@Module({
  controllers: [AchatController],
  providers: [AchatService],
  imports:[TypeOrmModule.forFeature([Achat]),ProduitModule,ProduceBuyModule]
})
export class AchatModule {}
