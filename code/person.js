export default class Person {
    // We use the constructor method to initialize properties for a class instance.
    // It takes whatever arguments we want to pass into an instance.
    constructor(initialName){
      this.name = initialName;
      this.species = "Homo Sapiens";
    }
    // We define any methods accessible to an instance outside of the constructor
    speak() {
      return `Hello! I'm ${this.name}`;
    }
  } 

  const sara=new Person('sara') ; 
  console.log(sara.speak()) ; 