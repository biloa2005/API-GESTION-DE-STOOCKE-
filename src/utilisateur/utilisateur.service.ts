import { Injectable } from '@nestjs/common';
import { Utilisateur } from './utilisateur.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UtilisateurService {
    constructor(
@InjectRepository(Utilisateur) 
private repo:Repository<Utilisateur>
){}
//creer un utilisateur
createUser( email:string,password:string){
    const utilisateur=new Utilisateur(email,password);
return this.repo.save(utilisateur)
}

}
