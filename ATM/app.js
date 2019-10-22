class ATM {
    constructor(tybe) {
      this.tybe = tybe;
      this.mony = 0;
      transactionHistory = [];
    }
    withdraw() {
      return this.mony--;
    }
    deposit() {
      return this.mony++;
    }
    showBalance() {
      console.log(this.mony);
    }
    History() {
        this.mony += this.mony;
        return transactionHistory = [this.mony];
    }
  }