import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TransactionService } from './transaction/transaction.service';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  
  controllers: [AppController],
  providers: [AppService, TransactionService],
  imports: [
    AccountModule,
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
  ],


})
export class AppModule {}
