
import {Entity,PrimaryGeneratedColumn,Column} from "typeorm"
@Entity()
export class Debt{
    @PrimaryGeneratedColumn()
    Id_debt:number;
    @Column()
    nom:string;
    @Column({type:'varchar',length:9})
    phone:number;
    @Column ()
   quantiter:number;
@Column({type:"date"})
date:Date;
@Column()
amount:number 
constructor(nom:string,phone:number,quantiter:number,date:Date,amount:number){
    this.date=date;
    this.phone=phone;
    this.quantiter=quantiter;
    this.nom=nom;
    this.amount=amount;
}

}