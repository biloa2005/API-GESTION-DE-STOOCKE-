import { Injectable } from '@nestjs/common';
import {Achat} from "./achat.entity"
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProduitService } from 'src/produit/produit.service';
import { ProduceBuyService } from 'src/produce-buy/produce-buy.service';

@Injectable()
export class AchatService {
    constructor(
        @InjectRepository(Achat)
        private repo:Repository<Achat>,
        private readonly produit:ProduitService,
        private readonly poducebuy:ProduceBuyService

    ){}
//creer un achat
 async create(date:Date,nom:string,prix:number,quantiter:number,id:number){
const achat=new Achat(date,nom,prix,quantiter);
//update stoock
 this.produit.updateStoock(quantiter,id);
 //save buy
 const savedBuy= await this.repo.save(achat)
 //save foreign key to buy and produce
const produce=await this.produit.findProduceById(id)
if(produce !==null){
 this.poducebuy.create(produce,savedBuy)
}
return savedBuy;

}
//afficher tous les achat
async findAll(){
    return this.repo.find();
}
}
