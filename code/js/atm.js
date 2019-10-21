export default class Atm {
    constructor (type, money = 0){
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
    }
    withdraw(amount) {
        this.money = - amount;
        this.transactionHistory.push(`withdraw - ${amount}`)
        return `withdraw ${amount}. Remaining balance ${this.money}.`;
    }
    deposit(amount) {
        this.money = +amount;
        this.transactionHistory.push(`deposit + ${amount}`)
        return `Deposit ${amount}. Current balance ${this.money}.`;
    }

    showbalance() {
        return `Current balance $${this.money}`
    }
}