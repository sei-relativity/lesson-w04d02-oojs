export default class Animal {
   //   import * as Helpers from './helper.js';    

 
    constructor(name, type, age, sound) {
      this.name = name;
      this.type = type;
      this.age = age;
      this.sound = sound;
    }
  
    getOlder() {
      this.age += 1;
      console.log(this.age);
    }
  
    makeSound() {
      return `${this.sound}! Hello, I'm a ${this.type}. And I'm ${this.age} years old.`;
    }
}

