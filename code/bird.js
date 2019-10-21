'use strict'
 
 import Animal from './animal.js';
 export default class Bird extends Animal {
    constructor(name, age, canFly= true){
        super (name, " bird", age, 'Barks') // super call parent class
        this.canFly= canFly
        // console.log(`DO have Passport ?`, ${this.hasPassport});

    }
    makeSound(){
        console.log(`${this.name},barkes!`);
        
    }
}
const bear = new Bird('Bear',5 );
console.log(bear.makeSound());
bear.gitOlder()
console.log(bear.makeSound());

