import { Module } from '@nestjs/common';
import { DetteController } from './dette.controller';
import { DetteService } from './dette.service';
import { HistoriqueModule } from './historique/historique.module';

@Module({
  controllers: [DetteController],
  providers: [DetteService],
  imports: [HistoriqueModule]
})
export class DetteModule {}
