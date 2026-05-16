import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Historical } from './historical.entity';
@Injectable()
export class HistoricalService {
    constructor(
        @InjectRepository(Historical)
    private repo:Repository<Historical>
    ){}
    //create
    create(prix:number,nom:string){
        const historic=new Historical(nom,prix)
        return this.repo.save(historic);
    }
    //findAll
    findAll(){
        return this.repo.find();
    }
}
