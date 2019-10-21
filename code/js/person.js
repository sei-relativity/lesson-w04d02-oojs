export default class Person {
    constructor(name) {
        this.name = name;
        this.species = 'Homo Sapiens';
    }
    speak() {
        return `Hello there! I'm ${this.name}`;
    }
}