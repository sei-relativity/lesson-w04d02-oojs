export default class Atm {
    constructor(type, money = 0) {
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
    }
    withdraw(amount) {
        if (this.money > amount)
            this.money -= amount;
        else
            console.log('No Sufficient Funds')

        this.transactionHistory.push(amount);
    }

    deposit(amount) {
        this.money += amount;
        this.transactionHistory.push(amount);
    }
    showBalance() {
        console.log(this.money)
    }
}