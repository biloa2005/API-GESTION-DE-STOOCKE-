import { Utilisateur } from "src/utilisateur/utilisateur.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('my_debt')
export class MyDebt{
@PrimaryGeneratedColumn()
id:number;
@Column()
name:string;
@Column()
amount:number;
@Column()
rest:number;
@ManyToOne(()=>Utilisateur,(utilisateur)=>utilisateur.mydebt,{onDelete:'CASCADE',onUpdate:'CASCADE'})
@JoinColumn({name:"Id_utilisateur"})
utilisateur:Utilisateur
constructor(name:string,amount:number,utilisateur:Utilisateur){
    this.name=name;
    this.amount=amount;
    this.utilisateur=utilisateur
    
}
}