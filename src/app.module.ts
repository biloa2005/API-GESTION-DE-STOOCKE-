import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TransactionService } from './transaction/transaction.service';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitModule } from './produit/produit.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { DetteModule } from './dette/dette.module';
import { AchatModule } from './achat/achat.module';
import { DamageModule } from './damage/damage.module';
import { DebtModule } from './debt/debt.module';
import { HistoricalModule } from './historical/historical.module';

import { ProductRuinModule } from './product-ruin/product-ruin.module';
import { ProductRuinService } from './product-ruin/product-ruin.service';
import { ProduceBuyModule } from './produce-buy/produce-buy.module';
import { DebtHistoricalModule } from './debt-historical/debt-historical.module';
import { ProduceDebtModule } from './produce-debt/produce-debt.module';
import { MydebtModule } from './mydebt/mydebt.module';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';




@Module({
  
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    })
    ,AccountModule,
     TransactionModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'biloa',
      database: 'banque_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Attention : à désactiver en production (risque de perte de données)
    }),
    ProduitModule,
    UtilisateurModule,
    DetteModule,
    AchatModule,
    DamageModule,
    DebtModule,
    HistoricalModule,
    ProductRuinModule,
    ProduceBuyModule,
    DebtHistoricalModule,
    ProduceDebtModule,
    MydebtModule,
    AiModule,
    
    
  ],


})
export class AppModule {}
