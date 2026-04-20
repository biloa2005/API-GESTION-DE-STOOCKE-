import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountService } from './account.service';
@Controller('account')
export class AccountController {

  constructor(private service:AccountService){}
@Post()
create(@Body() body){
  return this.service.create(body.owner);
}   
@Get()
findAll(){
  return this.service.findAll();
 
}
@Post(":id/deposit")
deposit(@Param("id") id:number,@Body() body){
  return this.service.deposit(id,body.amount);
}
@Post(":id/withdraw")
withdraw(@Param('id') id:number,@Body() Body){
  return this.service.withdraw(id,Body.amount)
}
}
