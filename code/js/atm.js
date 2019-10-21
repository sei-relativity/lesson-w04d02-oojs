export default class ATM {

  constructor(type = 'checking', money = 0) {
    this.type = type;
    this.money = money
    this.transactionHistory = []
  }

  withdraw(amount) {
    if (amount > this.money) {
      return 'you are too poor'
    } else {
      this.money -= amount
      this.transactionHistory.push(`-${amount}`)
      return `withdraw ${amount} new balance ${this.money}`
    }

  }
  deposit(amount) {
    this.money += amount
    this.transactionHistory.push(`+${amount}`)
    return `deposit ${amount}  new balance ${this.money}`

  }
  showBalance() {
    return `your balance ${this.money}`
  }
}

