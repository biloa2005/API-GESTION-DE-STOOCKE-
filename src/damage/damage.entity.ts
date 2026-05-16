import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";
@Entity()
export class Damage{
    @PrimaryGeneratedColumn()
    Id_damage:number;
    @Column()
    description:string;
           @Column()
    quantiter:number;
constructor(description:string,quantiter:number){
    this.description=description;
    this.quantiter=quantiter;
}
}