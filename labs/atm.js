'use strict';


export default class Atm{
    constructor(type,money =0){
    this.transactionHistory=[];
    this.type=type;
    this.tmoney=money;
  
    } 

    withdraw(amount){
        if (money > money){
        this.money -= amount;
        console.log('your balance'+this.money+"withdrawd"+ amount);
        this.transactionHistory.push(amount);

        }else{console.log('no money');}



    }
    deposit(amount){
        this.money+=amount;
        console.log("u deposed"+ amount+""+ this.money);

    }
    showBalance(){
        return console.log(this.money);

    }
    transactionHistory(){
        console.log('your transction '+ this.transactionHistory);
    }
}

