import { Body, Controller,Delete,Get,Param,ParseIntPipe,Patch,Post } from '@nestjs/common';
import { ProduitService } from './produit.service';

@Controller('produit')
export class ProduitController {
    constructor(private produit: ProduitService){}
    @Post()
    Create(@Body() body){
        return this.produit.create(body.nom,body.prix,body.quantiter,body.user);
    }
    @Get(':id/number')
    findNumber(@Param('id') id:number){
        return this.produit.getNumberProduce(id);
    }
    //UPDATE NUMBER OF PRODUCE remove 
    @Patch(':id/update')
    updateQuantity(@Param('id',ParseIntPipe) id:number,@Body() body){
        return this.produit.updateStoock(body.quantite,id)
    }
    //update number of produce add
    @Patch(':id/addNumber')
    addNumber(@Param('id') id:number,@Body() body){
        return this.produit.saveProduceAdd(id,body.quantite);
    }
@Delete(':id/delete')
deleteProduce(@Param('id',ParseIntPipe) id:number){
    return this.produit.deleteProduce(id);
}

}
