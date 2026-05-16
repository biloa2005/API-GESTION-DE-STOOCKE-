import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";
@Entity()
export class Historical {
    @PrimaryGeneratedColumn()
    Id_historical:number;
    @Column()
nom:string;
@Column()
prix:number;
constructor(nom:string,prix:number){
    this.nom=nom;
    this.prix=prix;
}
}