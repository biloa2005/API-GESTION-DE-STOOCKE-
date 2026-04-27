import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Produit}from "./produit.entity"
import {Repository } from "typeorm"
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
@Injectable()
export class ProduitService {
    constructor(
        @InjectRepository(Produit)
        private repo:Repository<Produit>
    ){}
    //creer un produit
    create(nom:string,prix:number,quantiter:number,user:Utilisateur){
        const produit =new Produit(nom,quantiter,prix,user);
        return this.repo.save(produit);
    }
}
