import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Account} from './account.entity';
import {Repository} from "typeorm"

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private repo:Repository<Account>
  ){}
    //creer un compte
    create(owner:string){
     //const account = this.repo.create({ owner, balance: 0 }); 
     const account = new Account(owner); 
     return this.repo.save(account);
    }
    //recuperer tout les comptes
    findAll():Promise<Account[]>{
      return this.repo.find();
    }
    //deposer de l argent
    async deposit(id:number,amount:number){
      
const account=await this.repo.findOneBy({id});
if (!account) {
    throw new Error("Compte introuvable");
  }
account.deposit(amount);
return this.repo.save(account);
}

    
    //retirer l' argent
    async withdraw(id:number,amount:number){
      const account=await this.repo.findOneBy({id});
    if(!account){
      throw new Error("insuffisant")
    }
      account.withdraw(amount)
      return this.repo.save(account)
    }

}
