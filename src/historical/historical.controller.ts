import { Controller,Body,Get,Post } from '@nestjs/common';
import { HistoricalService } from './historical.service';
@Controller('historical')
export class HistoricalController {
constructor(
    private service:HistoricalService
){}
@Post()
create(@Body() body){
    return this.service.create(body.nom,body.prix)
}
@Get()
findAll(){
    return this.service.findAll();
}
}
