export default class Animal {
    constructor(name, type, age, sound, haspassport = false) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.sound = sound;
        this.haspassport = haspassport;
    }
    getOlder() {
        this.age++;
        console.log('Aga: ', this.age);
    }

    makeSound() {
        return `${this.sound}! Hello, I'm a ${this.type}. And I'm ${this.age} year old`
    }
}