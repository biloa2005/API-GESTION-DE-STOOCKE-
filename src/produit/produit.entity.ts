import { Utilisateur } from "src/utilisateur/utilisateur.entity";
import{Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn} from "typeorm"
@Entity()
export class Produit{
    @PrimaryGeneratedColumn()
    Id_produit:number;
    @Column()
    nom:string;
    @Column()
    prix:number;
    @Column()
    quantite:number;
 @ManyToOne(()=>Utilisateur,(utilisateur)=>utilisateur.produit,{
    onDelete: 'CASCADE', // Supprime l'historique si l'utilisateur est supprimé
    onUpdate: 'CASCADE', //
 })   
 @JoinColumn ({name:"Id_utilisateur"})
 utilisateur:Utilisateur;
 //
    //constructeur
    constructor(nom:string,prix:number,quantite:number,utilisateur: Utilisateur){
        this.nom=nom;
        this.prix=prix;
        this.quantite=quantite;
        this.utilisateur=utilisateur;

    }


}