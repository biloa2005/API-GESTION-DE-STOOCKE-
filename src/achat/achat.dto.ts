import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AchatDto{
    @Type(()=>Date)
     @IsDate()
    date:Date;
    @IsOptional()   
    @IsString({message:"entrer le nom du client"})
    nom:string;
    @IsNotEmpty()
    @IsNumber({},{message:"entrer un nombre pour le prix"})
    prix:number;
    @IsNotEmpty()
    @IsNumber({},{message:"entrer un nombre pour la quantiter d achat"})
    quantiter:number;
    @IsNotEmpty()
    @IsNumber({},{message:"entrer un nombre"})
    id:number

}