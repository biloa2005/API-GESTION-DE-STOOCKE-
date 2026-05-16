
import { Debt } from "src/debt/debt.entity";
import { Produit } from "src/produit/produit.entity";
import {Entity,PrimaryColumn,ManyToOne, JoinColumn} from "typeorm"
@Entity('produce_debt')
export class ProduceDebt{
@PrimaryColumn()
Id_produit:number;
@PrimaryColumn()
Id_debt:number;
@ManyToOne(()=>Produit,produit=>produit.Id_produit,{onDelete:'CASCADE'})
@JoinColumn({name:'Id_produit'})
produit:Produit;
 @ManyToOne(()=>Debt,debt=>debt.Id_debt,{onDelete:'CASCADE'})
    @JoinColumn({name:'Id_debt'})
    debt:Debt;
constructor(debt?:Debt,produit?:Produit){
    if (debt && produit) {
      this.debt = debt;
      this.produit = produit;
      // TypeORM fera le lien automatiquement avec les IDs
      this.Id_debt = debt.Id_debt;
      this.Id_produit = produit.Id_produit;
    }
}
}