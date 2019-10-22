class ATM { 
    constructor(type,money) {
        this.type=type; 
        this.money=money; 
    }

    withdraw(input) {
        money=money - input ; 
    }

    deposit(input) {
        money=money+input ; 
    } 

    showBalance() {
        console.log(money) ; 
    }

    
}