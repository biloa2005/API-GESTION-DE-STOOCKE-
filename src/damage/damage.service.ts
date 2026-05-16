import { Injectable } from '@nestjs/common';
import {Damage} from "./damage.entity"
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProduitService } from 'src/produit/produit.service';

import { ProductRuinService } from 'src/product-ruin/product-ruin.service';
@Injectable()
export class DamageService {
    constructor(
@InjectRepository(Damage)
private repo:Repository<Damage>,
private readonly produit:ProduitService,
private readonly produceruin:ProductRuinService
    ){}
    //make damage
 async   create(description:string,quantiter:number,id:number){
        const damage=new Damage(description,quantiter);
        this.produit.updateStoock(quantiter,id);
        const damaged=await this.repo.save(damage);
        const produit= await this.produit.findProduceById(id);
   if(produit !== null && typeof produit=='object'){
        await this.produceruin.create(produit,damaged);
   }
        return damaged;
    }
    //find
    findAll(){
        return this.repo.find()
    }
}
