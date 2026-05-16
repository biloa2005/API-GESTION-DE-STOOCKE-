import {Entity,ManyToOne,Column,JoinColumn,PrimaryColumn } from "typeorm";
import { Debt } from "src/debt/debt.entity";
import { Historical } from "src/historical/historical.entity";
@Entity("debt_historical")
export class DebtHistorical{
    @PrimaryColumn()
    Id_debt:number;
    @PrimaryColumn()
    Id_historical:number;
    @ManyToOne(()=>Debt,debt=>debt.Id_debt,{onDelete:'CASCADE'})
    @JoinColumn({name:'Id_debt'})
    debt:Debt;
    @ManyToOne(()=>Historical,historical=>historical.Id_historical,{onDelete:'CASCADE'})
    @JoinColumn({name:'Id_historical'})
    historical:Historical


}