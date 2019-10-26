export default class atm{
    constructor(type, money = 0){
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
    }

    withdraw(amount){
        this.money = -amount;
        this.transactionHistory.push(`Withdraw - ${amount}`);
        
        return `withdraw ${amount}, remaining balance ${this.money}`;
    }

    deposit(amount){
        this.money = +amount;
        this.transactionHistory.push(`deposit + ${amount}`);

        return `Deposit ${amount}, remaining balance ${this.money}`;

    }

    showBalance(){
        return `Current balance $ ${this.money}`;

    }
}