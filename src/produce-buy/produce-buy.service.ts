import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  ProduceBuy } from './produce-buy.entity';
import { Repository } from 'typeorm';
import { Produit } from 'src/produit/produit.entity';
import { Achat } from 'src/achat/achat.entity';

@Injectable()
export class ProduceBuyService {
    constructor(
        @InjectRepository(ProduceBuy)
        private repo:Repository<ProduceBuy>
    ){
       
    }
     create (produce:Produit,buy:Achat){
const Producebuy=new ProduceBuy(produce,buy)
        this.repo.save(Producebuy)   
        }
}
