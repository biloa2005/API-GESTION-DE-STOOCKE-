import {OneToMany,Entity,PrimaryGeneratedColumn,Column} from "typeorm"
import { Produit } from "src/produit/produit.entity";
@Entity()
export class Utilisateur{
    @PrimaryGeneratedColumn()
    Id_utilisateur:number;
    @Column()
    email:string;
@Column()
password:string;
// Dans utilisateur
@OneToMany(() => Produit, (produit) => produit.utilisateur)
produit: Produit[]; // Ce nom doit correspondre à celui utilisé dans le ManyToOne

constructor(email:string,password:string){
    this.email=email;
    this.password=password;
}
}