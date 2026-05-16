import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRuin } from './product-ruin.entity';
import { ProductRuinService } from './product-ruin.service';

@Module({
     imports:[TypeOrmModule.forFeature([ProductRuin])],
      providers: [ProductRuinService],
     exports:[ProductRuinService]

})
export class ProductRuinModule {
   
   
}
