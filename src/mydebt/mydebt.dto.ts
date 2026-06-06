import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Utilisateur } from "src/utilisateur/utilisateur.entity";

export class MydebtDto{
@IsNotEmpty({message:"entrer le montant de la dette"})
@IsNumber({},{message:"le montant doit etre un nombre"})
    amount:number;
@IsNotEmpty({message:"indiquer le nom du creansier"})
@IsString({message:"le nom doit etre un string"})
    name:string;
@IsNotEmpty({message:"entrer une valeur a pour l'id utilisateur"})
    utilisateur:Utilisateur
  
}