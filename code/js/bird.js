import animals from "./js/animals.js"

export default class Bird extends Animals{

    constructor(name,age, canFly= true){
        super(name, "bird", age, "KKAAAKK");
        this.name = name;
        this.age = age;
        this.canFly = canFly;
    }

    makeSound(){
        return `Hello, My name is ${this.name} ${this.sound}`;
    }}



