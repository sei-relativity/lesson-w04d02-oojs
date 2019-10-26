"use strict";
export default class ATM {
  constructor(type, money = 0, transactions = []) {
    this.type = type;
    this.money = money;
    this.transactions = transactions;
  }
  withdraw(amount) {
    this.money = this.money - amount;
    this.transactions.push(-amount);
  }
  deposit(amount) {
    this.money = this.money + amount;
    this.transactions.push(amount);
  }
  showBalance() {
    console.log(this.money);
  }
}
