import { Body, Controller,Get,Param,Post } from '@nestjs/common';
import { ProduitService } from './produit.service';

@Controller('produit')
export class ProduitController {
    constructor(private produit: ProduitService){}
    @Post()
    Create(@Body() body){
        return this.produit.create(body.nom,body.prix,body.quantiter,body.user);
    }

}
