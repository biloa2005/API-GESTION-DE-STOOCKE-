import { Controller,Param,Body,Get,Post,Patch } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
@Controller('utilisateur')
export class UtilisateurController {
    constructor(private utilisateur:UtilisateurService){}
    @Post()
    create(@Body() body){
        return this.utilisateur.createUser(body.email,body.password);
    }
}
