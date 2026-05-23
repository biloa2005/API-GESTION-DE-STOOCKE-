import { BadRequestException,Injectable, NotFoundException } from '@nestjs/common';
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
    /**
     * UPDATE NUMBER OF PRODUCE
     * @param Id_produit 
     * @returns 
     */
    //get number of produce
    async getNumberProduce(Id_produit: number):Promise<number>{
        const numberProduce= await this.repo.findOne({
            where:{Id_produit},
            select:['quantite']
        });
        if(!numberProduce) throw new NotFoundException('produit non trouver');
        return numberProduce.quantite ;
    }
    //get price of produce by id
    async getPriceProduce(Id_produit:number):Promise<number>{
        const price=await this.repo.findOne({
            where:{Id_produit},
            select:['prix']
        });
         
        if (!price) throw new NotFoundException('pas de prix ')
return price.prix
        }
    //getProduce
     async getProduce(Id_produit: number):Promise<Produit>{
        const Produce= await this.repo.findOne({
            where:{Id_produit}
                });
        if(!Produce) throw new NotFoundException('produit non trouver');
        return Produce;
    }
    //new number of produce
    async getNewNumberProduce(nb:number,id:number): Promise<number>{
        let newNumber:number
        const b= await this.getNumberProduce(id);
                
         newNumber=b-nb;
         

         if (newNumber < 0) throw new BadRequestException('Stock insuffisant');
       return  newNumber;
    } 
    //new number of produce to stoock
    async updateStoock(nb:number,Id:number){
        const b= await this.getNewNumberProduce(nb,Id);

        return this.repo.update(Id,{quantite:b})
    } 
    //add produce
    async addNumberOfProduce(nb:number,id:number):  Promise<number>{
        const num=await this.getNumberProduce(id);
        let newNumber:number;
        newNumber=num+nb;
return newNumber;

    }
    //save produce add
    async saveProduceAdd(id:number,nb:number){
const add= await this.addNumberOfProduce(nb,id);
 return this.repo.update(id,{quantite:add})    
}
//find produce by id
async findProduceById(id:number){
     const produce= this.repo.createQueryBuilder('Produit')
    .where('Id_produit=:id',{id:id})
    .getOne()

return produce

}
    //delete produce
   async deleteProduce(id:number){
      const  result = await this.repo.delete(id);
if(result.affected===0){
 throw new NotFoundException("produit non trouver");
}
return {delete:true}
    }
}
