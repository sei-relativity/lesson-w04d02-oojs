`use strict`;

// Import animal.js
import Animal from `./animal.js`;
// Import All helpers.js
import * as Helpers from `./helper.js`;

console.log(Helpers.add(1,2));
console.log(Helpers.getRandom());



// {
//     constructor(name, tybe, age, sound, hasPassport = false){
//         this.name = name;
//         this.tybe = tybe;
//         this.age = age;
//         this.sound = sound;
//         this.hasPassport = hasPassport;
//     }

//     getOlder(){
//         this.age++;
//         console.log('Age:', this.age); 
//     }

//     makeSound(){
//         return `${this.sound}! Hello, I'm a ${this.type}. And I'm ${this.age} years old.`;
//     }
// }

// const notMyCat = new Animal('Joe','cat',2,'mooo');
// console.log(notMyCat.makeSound());
// notMyCat.getOlder();
// console.log(notMyCat.makeSound());