
"use strict";
export default class ATM {
    constructor(type, money = 0){
        this.type = type;
        this.money = money;
        this.transactions=[];
    }
    withdraw(amount){

        if (amount< this.money){
            this.money -= amount;
            console.log("your current balance "+ this.money + " withdrawed " + amount);
            this.transactions.push(amount);
    }
        else{
            console.log("You are broke my child");
    }
}

    deposit(amount){
        this.money += amount;
        console.log("you have deposited " + amount + " youzza rich ma n*gga " + this.money);
        this.transactions.push(amount);

}

    showBalance(){
    return console.log(this.money);
}

    transactions(){
    console.log("your transactions are"+ this.transactions);
}

}


