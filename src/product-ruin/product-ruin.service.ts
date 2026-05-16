import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRuin } from './product-ruin.entity';
import { Repository } from 'typeorm';
import { Produit } from 'src/produit/produit.entity';
import { Damage } from 'src/damage/damage.entity';

@Injectable()
export class ProductRuinService {
    constructor(
        @InjectRepository(ProductRuin)
        private produceruin:Repository<ProductRuin>
    ){}
     async create (produce:Produit,ruin:Damage):Promise<ProductRuin>{
        const link= new ProductRuin(produce,ruin) 
        return this.produceruin.save(link)
    }
}
