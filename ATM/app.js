class ATM {
    constructor(type, money = 0, backupAccount = null) {
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
        this.backupAccount = backupAccount;
    }
    withdraw(x) {
        if (this.money - x < 0) {
            this.backupAccount.withdraw(Math.abs(this.money - x))
            this.deposit(Math.abs(this.money - x))
        }
        this.money -= x;
        this.transactionHistory.push('-' + x)
    }
    deposit(x) {
        this.money += x;
        this.transactionHistory.push('+' + x)

    }
    showBalance() {
        console.log(this.money)
    }
}
