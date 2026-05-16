import { Controller,Param,Post,Get,Body } from '@nestjs/common';
import { AchatService } from './achat.service';

@Controller('achat')
export class AchatController {
    constructor(private service:AchatService){}
    @Post()
    create(@Body() body){
        return this.service.create(body.date,body.nom,body.prix,body.quantiter,body.id);
        
    }
    @Get()
    achat(){
        return this.service.findAll();
    }
}
