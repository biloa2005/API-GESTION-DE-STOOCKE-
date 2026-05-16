import { Module } from '@nestjs/common';
import { ProduceBuyService } from './produce-buy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduceBuy } from './produce-buy.entity';

@Module({
  providers: [ProduceBuyService],
imports:[TypeOrmModule.forFeature([ProduceBuy])],
exports:[ProduceBuyService]
})
export class ProduceBuyModule {}
