import Animal from './animal.js'

export default class Bird extends Animal {
    constructor(name, age, canFly = true){
        super(name, "bird", age, 'SQWAK!');
        this.name = name;
        this.age = age;
        this.canFly = canFly;
    }
    makeSound() {
        return `${this.name} BARK MMotherFucker im a BIRB!`
    }
}