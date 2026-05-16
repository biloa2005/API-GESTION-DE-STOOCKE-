import { Controller,Get,Post,Body } from '@nestjs/common';
import { DebtService } from './debt.service';
@Controller('debt')
export class DebtController {
    constructor(
        private service:DebtService
    ){
        
    }
    @Post()
        create(@Body() body){
            return this.service.create(body.nom,body.date,body.quantiter,body.phone,body.id)
        }
        @Get()
         findAll(){
        return this.service.findAll()
    }
}
