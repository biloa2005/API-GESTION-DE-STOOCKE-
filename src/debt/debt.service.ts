import { Injectable, NotFoundException } from '@nestjs/common';
import { Debt } from './debt.entity';
import {Repository} from "typeorm"
import { InjectRepository } from '@nestjs/typeorm';
import { ProduitService } from 'src/produit/produit.service';
import { Produit } from 'src/produit/produit.entity';
import { ProduceDebtService } from 'src/produce-debt/produce-debt.service';
import { HistoricalService } from 'src/historical/historical.service';
@Injectable()
export class DebtService {
    constructor(
        @InjectRepository(Debt)
        private repo:Repository<Debt>,
        private readonly produit:ProduitService,
        private readonly producedebt:ProduceDebtService,
        private readonly historical:HistoricalService
    ){}
     //find debt by id
    async findDebt(Id_debt:number){
        const debts=this.repo.createQueryBuilder('Debt')
        .where('Debt.Id_debt=Id_debt',{Id_debt:Id_debt})
        .getOne
   return debts;
    }
    //make debt
    async create(nom:string,date:Date,quantiter:number,phone:number,id:number){
        let amount:number;
          //amount of debt
        let  price:number= await this.produit.getPriceProduce(id);
        amount= quantiter * price;
        console.log("amount",amount)
        const debt= new Debt(nom,phone,quantiter,date,amount)
      console.log("object", debt)
        //create debt
        const savedDebt= await this.repo.save(debt)
        this.historical.create(amount,nom)
        //modify  number of stook
        this.produit.updateStoock(quantiter,id)
        const produce= await this.produit.findProduceById(id)
        //save foreign key
     if (produce !==null && typeof produce=='object'){
        await this.producedebt.createProduceDebt(savedDebt,produce)
        }
        return savedDebt
    }
    //find produce debt 
   async findProduceDebt(Id_produit:number):Promise<Produit>{
        const b= await this.produit.getProduce(Id_produit)
return b;
    } 
   
//delete debt of the client
    async deleteDebt(id:number){
        const result=await this.repo.delete(id)
if(result.affected===0){
    throw new NotFoundException('debt non trouver');
}
return {delete:true}
    }
    //find ALL DEBT
    findAll(){
        return this.repo.find();
    }
}
