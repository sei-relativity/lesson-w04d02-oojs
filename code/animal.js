'use strict'
 export default class Animal {
    constructor(name, type, age, sound, hasPassport = false){
        this.name = name; 
        this.type = type;
        this.age = age;
        this.sound = sound;
        this.hasPassport;
    }

    gitOlder(){
        this.age+= 1;
        console.log('Age:', this.age);
        
    }
    makeSound(){
        return `${this.sound}! Heloo I am ${this.name} and i am ${this.age}years old.`;
    }
}
