import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator"

export class DamageDto{
 @IsNotEmpty({message:'la description ne doit pas etres vide'})
 @IsString({message:'la description doit contenir des chaine de caractere'})
 @MaxLength(200)       
 description:string;
@IsNumber({},{message:"sa doit etres un nombre"})
   @IsNotEmpty({message:"remplir obligatoire"})
   quantiter:number;
   @IsNumber({},{message:"seulement les nombre"})
   @IsNotEmpty({message:'donner l id du produit a signaler la deterioration'})
 id:number;

}