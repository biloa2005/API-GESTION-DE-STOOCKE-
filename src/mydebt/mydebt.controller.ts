import { Body, Controller, Get, HttpCode, ParseIntPipe, Patch, Post,Param, Query, Delete } from '@nestjs/common';
import { MydebtService } from './mydebt.service';
import { create } from 'domain';
import { MydebtDto} from './mydebt.dto';
import { UpdateMyDebtDto } from './mydebtupdate.dto';


@Controller('mydebt')
export class MydebtController {
    constructor(
        private mydebt:MydebtService
    ){
    }
    @HttpCode(200)
        @Get()
        findAll(){
            return this.mydebt.findAll()
        }
        @HttpCode(201)
        
        @Post()
        create(@Body() body:MydebtDto){
          return this.mydebt.createMyDebt(body.name,body.amount,body.utilisateur)
        }
          
        @Patch('drop')
        dropAmount(
            @Query('id',ParseIntPipe) id:number,
            @Query('amount',ParseIntPipe) amount:number
        ){
          return this.mydebt.savedDropAmound(id,amount)
        }  
        @Patch('add')
        addDebt(
            @Query('id',ParseIntPipe) id:number,
            @Query('amount',ParseIntPipe) amount:number
        ){
return this.mydebt.savedAddAmound(id,amount)
        }
        @Delete(':id/delete')
        deleteMydebt(@Param('id',ParseIntPipe) id:number){
            return this.mydebt.remove(id)
        }
        @Patch(':id/updatedmydebt')
updateMyDebt(@Param('id',ParseIntPipe) id:number, @Body() body:UpdateMyDebtDto){
    return this.mydebt.updateMyDebt(id,body.amount,body.name,body.rest)
}     
@Get('total')
totalMyDebt(){
    return this.mydebt.totalMyDebt()
}   
        


}
