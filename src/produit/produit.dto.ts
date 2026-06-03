import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Utilisateur } from "src/utilisateur/utilisateur.entity";

export class ProduitDto{
    @IsNotEmpty({message:"le nom du produit est obligatoire"})
    @IsString()  
    nom:string;
    @IsNotEmpty()
        @IsNumber()
        prix:number;
        @IsNotEmpty()
        @IsNumber()
        quantiter:number;
        @IsNotEmpty()
        user:Utilisateur;
}