import { Module } from '@nestjs/common';
import { HistoricalService } from './historical.service';
import { HistoricalController } from './historical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historical } from './historical.entity';

@Module({
  providers: [HistoricalService],
  controllers: [HistoricalController],
  imports:[TypeOrmModule.forFeature([Historical])],
  exports:[HistoricalService]
})
export class HistoricalModule {}
