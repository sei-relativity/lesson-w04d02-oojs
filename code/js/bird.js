import Animal from './animal.js';
export default class Bird extends Animal {
    constructor(name, age, canFly = true) {
        super(name, 'bird', age, 'meow');
        this.canFly = canFly;
    }

    makeSound() {
        console.log(`${this.name} meow.`)
    }
}