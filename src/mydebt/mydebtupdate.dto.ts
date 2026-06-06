import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateMyDebtDto{
    @IsNotEmpty({message:"entrer le montant de la dette"})
    @IsNumber({},{message:"le montant doit etre un nombre"})
        amount:number;
    @IsNotEmpty({message:"indiquer le nom du creansier"})
    @IsString({message:"le nom doit etre un string"})
        name:string;
          @IsNumber({},{message:"entrer un nombre comm reste"})
    rest:number
}