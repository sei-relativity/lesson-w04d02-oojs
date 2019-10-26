export default class animals{
    constructor(name, type, age, sound, hassPassport= false ){
        this.name = name;
        this.type = type;
        this.age = age;
        this.sound = sound;
        this.hassPassport = hassPassport;
    }

    getOld(){
        this.age ++;
        return `Age: ${this.age}`;
        }
    
    makeSound(){
        return `${this.sound} Hello, My name is ${this.name} and I am ${this.age} years old`;

    }}