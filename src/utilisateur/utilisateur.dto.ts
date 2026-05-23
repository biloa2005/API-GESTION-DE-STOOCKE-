import {OneToMany,Entity,PrimaryGeneratedColumn,Column, ManyToOne} from "typeorm"
import { Produit } from "src/produit/produit.entity";
import { MyDebt } from "src/mydebt/mydebt.entity";

@Entity()
export class CreateUserDto{
    @PrimaryGeneratedColumn()
    Id_utilisateur:number;

    email:string;
@Column()
password:string;
//lien entre mes dette 
@OneToMany(()=>MyDebt, (mydebt)=>mydebt.utilisateur)
mydebt:MyDebt[]
// Dans utilisateur
@OneToMany(() => Produit, (produit) => produit.utilisateur)
produit: Produit[]; // Ce nom doit correspondre à celui utilisé dans le ManyToOne
constructor(email:string,password:string){
    this.email=email;
    this.password=password;
}
}