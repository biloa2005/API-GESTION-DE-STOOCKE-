import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MyDebt } from './mydebt.entity';
import { Repository } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';

@Injectable()
export class MydebtService {
    constructor(
        @InjectRepository(MyDebt)
        private repo:Repository<MyDebt>
    ){}
    //my debt
async createMyDebt(name:string,amount:number,utilisateur:Utilisateur){
        const debt=new MyDebt(name,amount,utilisateur);
      const  saveddebt=await this.repo.save(debt);
return saveddebt
    } 
    //delete
    async remove(id:number){
        const result=await this.repo.delete(id);
        if(result.affected===0){
            throw new NotFoundException('debt not found');
        }
        return {deleted:true}
    }
    //return amount of debt
    async amountDebt(id:number):Promise<number>{
const debt= await this.repo.createQueryBuilder('MyDebt')
.where("id=id",{id:id})
.getOne()
if(debt ==null){
    throw new NotFoundException("not")
}
const amount=debt.amount
return amount ;   
}
//add amount of debt
async addAmount(id:number,amount:number):Promise<number>{
    const myAmount= await this.amountDebt(id)
    const newamound= amount + myAmount;
    return newamound
}
//drop debt
async dropAmount(id:number,amount:number):Promise<number>{
    const myAmount= await this.amountDebt(id)
    const newamound=myAmount - amount;
    if(newamound<0){
        throw new BadRequestException("somme rembourser superieur a la dette")
    }
    return newamound
}

}
