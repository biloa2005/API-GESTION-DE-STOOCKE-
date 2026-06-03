import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Achat {
    @PrimaryGeneratedColumn()
    Id_achat:number;
    @Column({type:'date'})
    date:Date;
    @Column()
    nom:string;
    @Column()
    prix:number;
    @Column()
    quantiter:number;
    //constructeur
    constructor(date:Date, nom:string, prix:number, quantiter:number){
      
       this.date=date;
      this.nom=nom;
      this.prix=prix;
      this.quantiter=quantiter 
    }


}