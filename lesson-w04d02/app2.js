class Person{
    constructor(name){
        //this refers to the instance of a class
        this.name = name;
        this.species = "homo sapiens";
    }

    speak(){
        return `Hello! I am ${this.name}`;
    }
}

const muhannad = new Person("Muhannad");
console.log(muhannad.speak());
// hello, 
const abdulrahman = new Person ("khara");
console.log(abdulrahman.speak());