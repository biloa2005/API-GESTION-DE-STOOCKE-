import { Module } from '@nestjs/common';
import { ProduitController } from './produit.controller';
import { ProduitService } from './produit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Produit} from './produit.entity'
@Module({
  imports:[
TypeOrmModule.forFeature([Produit])
  ],
  controllers: [ProduitController],
  providers: [ProduitService],
   exports: [ProduitService]
})
export class ProduitModule {}
