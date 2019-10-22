'use strict';

export default class ATM{
    constructor(type , money = 0  ){
        this.type = type;
        this.money = money;
        // this.transactionHistory = transactionHistory;
        // console.log('init balance',this.money);
    }
    
    deposit(amount){
        this.money += amount;
        console.log('after d',this.money)
    }
    withdraw(amount){
        if(amount > this.money){
            console.log('No enough balance');
        }
        else{
            this.money -= amount;
        }
        console.log('after w',this.money);
        
    }
    showBalance(){
        console.log(this.money);
        
    }

}