import { Controller,Post,Get,Body, Delete, ParseIntPipe, Param } from '@nestjs/common';
import { DamageService } from './damage.service';
@Controller('damage')
export class DamageController {
    constructor(
        private service:DamageService
    ){}
    @Post()
    create(@Body() body){
        return this.service.create(body.description,body.quantiter,body.id)
    }
    @Get()
    findAll(){
        return this.service.findAll()
    }
     @Delete(":id/delete")
        deleteMydebt(@Param('id',ParseIntPipe) id:number){
            return this.service.deleteProduceDamaged(id)
        }
}
