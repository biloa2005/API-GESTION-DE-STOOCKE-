import { Injectable } from '@nestjs/common';
import { ProduceDebt } from './produce-debt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Debt } from 'src/debt/debt.entity';
import { Produit } from 'src/produit/produit.entity';
@Injectable()
export class ProduceDebtService {
 constructor(
    @InjectRepository(ProduceDebt)
    private repo:Repository<ProduceDebt>
 ){}
 createProduceDebt(debt:Debt,produce:Produit){
   const producedebt=new ProduceDebt(debt,produce)
    return  this.repo.save(producedebt);
 }
}
