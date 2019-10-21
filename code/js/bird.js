import Animal from './animal.js';
export default class Bird extends Animal {
    constructor(name, age, canFly = true) {
        super(name, 'bird', age, 'Barks');
        this.canFly = canFly;
        console.log('Do Passpord?', this.haspassport);

    }
    makeSound() {
        console.log(`${this.name} barks`)
    }
}