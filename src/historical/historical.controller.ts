import { Controller,Body,Get,Post, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { HistoricalService } from './historical.service';
@Controller('historical')
export class HistoricalController {
constructor(
    private service:HistoricalService
){}
@Post()
create(@Body() body){
    return this.service.create(body.prix,body.nom)
}
@Get()
findAll(){
    return this.service.findAll();
}
@Delete("id/delete")
deleteHistorical(@Param('id',ParseIntPipe) id:number){
    return this.service.deleteHistorical(id)
}
}
