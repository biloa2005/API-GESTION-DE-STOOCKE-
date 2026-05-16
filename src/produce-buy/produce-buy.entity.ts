import { Column,PrimaryColumn,JoinColumn,ManyToOne, Entity } from "typeorm";
import { Debt } from "src/debt/debt.entity";
import { Produit } from "src/produit/produit.entity";
import { Achat } from "src/achat/achat.entity";
@Entity("produce_buy")
export class ProduceBuy{
    @PrimaryColumn()
    Id_produit:number;
@PrimaryColumn()
Id_achat:number;
@ManyToOne(()=>Produit,produit=>produit.Id_produit)
@JoinColumn({name:'Id_produit'})
produit:Produit;
@ManyToOne(()=>Achat,achat=>achat.Id_achat,{onDelete:'CASCADE'})
@JoinColumn({name:'Id_achat'})
achat:Achat
constructor(produce?:Produit,achat?:Achat){
if(produce && achat){
    this.produit=produce;
    this.achat=achat;
    this.Id_achat=achat.Id_achat;
    this.Id_produit=produce.Id_produit
    }
}
}