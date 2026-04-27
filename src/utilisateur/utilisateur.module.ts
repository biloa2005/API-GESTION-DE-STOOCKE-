import { Module } from '@nestjs/common';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    // Cette ligne est CRUCIALE pour résoudre le "UtilisateurRepository"
    TypeOrmModule.forFeature([Utilisateur]) 
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService]
})
export class UtilisateurModule {}
