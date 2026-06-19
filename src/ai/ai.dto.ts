import { IsString } from "class-validator";

export class AskDto{
    @IsString({message:"entrer une chaine de charactere"})
    question:string;
}