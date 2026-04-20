import {Entity,PrimaryGeneratedColumn,
    Column
} from "typeorm"
@Entity()
export class Account{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    owner:string;
    @Column()
    balance:number;
    //constructeur poo
    constructor(owner:string,balance: number=0){
        this.owner=owner;
        this.balance=balance;
    }
    //method
    deposit(amount:number){
        this.balance+=amount;
    }
    withdraw(amount:number){
        if(amount>this.balance){
            throw new Error('Solde insiffussant');
        }
        this.balance-=amount;
    }

}