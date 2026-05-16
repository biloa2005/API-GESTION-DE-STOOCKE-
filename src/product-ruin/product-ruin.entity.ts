import { PrimaryGeneratedColumn,ManyToOne,Column,JoinColumn,Entity, PrimaryColumn } from "typeorm";
import { Produit } from "src/produit/produit.entity";
import { Damage } from "src/damage/damage.entity";
@Entity('product_ruin')
export class ProductRuin {
@PrimaryColumn()
Id_damage:number;
@PrimaryColumn()
Id_produit:number;
@ManyToOne(()=>Produit,produit=>produit.Id_produit,{onDelete:'CASCADE'})
@JoinColumn({name:'Id_produit'})
produit:Produit;
@ManyToOne(()=>Damage,damage=>damage.Id_damage,{onDelete: 'CASCADE'})
@JoinColumn({name:"Id_damage"})
damage:Damage;
constructor(produit?:Produit,ruin?:Damage){
    if(produit && ruin){
        this.produit=produit;
        this.damage=ruin;
        this.damage.Id_damage=ruin.Id_damage;
            this.Id_produit=produit.Id_produit
    }
}
}
