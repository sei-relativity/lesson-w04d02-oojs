export default class ATM{
    constructor(type){
        this.type = type;
        this.money = 0;
        this.transcationHistory = ""
    }
    deposit(amount){
        this.money += amount
        this.transcationHistory += "A desposit has been made by" + amount;
    }
    withdraw(amount){
        this.money -= amount
        this.transcationHistory += "A withdraw has been made by" + amount;
    }
    showBalance(){
        return console.log(this.money)
    }
}