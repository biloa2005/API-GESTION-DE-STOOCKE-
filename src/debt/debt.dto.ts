import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DebtDto{
   @IsString()
   @IsNotEmpty()
    nom:string;
        @IsNotEmpty()
        @IsNumber({},{message:"entrer le nyumero du client endette"})
        phone:number;
        @IsNumber({},{message:"entrer la quantiter de produit "})
       quantiter:number;
    @Type(()=>Date)
    date:Date;
    @IsNumber()
    amount:number;
    @IsNumber()
    id:number
}