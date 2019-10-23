export default class Animals{
    constructor(name, type, age, sound){
        this.name = name
        this.age = age 
        this.type = type
        this.sound = sound
    }
    getOlder(){
        this.age += 1;
        console.log(this.age)
    }
    makeSound(){
        return `${this.sound}!!! Hello, I'm a ${this.type}, and I'm ${this.age} years old`
    }
}