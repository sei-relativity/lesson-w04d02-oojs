'use strict';

import Animal from './animal.js';

// import * as Helper from './helper.js';
import { life } from './helper.js';
import Person from './person.js';
import Bird from './bird.js'

console.log(life)
// const celica ={
//     model:'Toy-Yoda',
//     color:'red',
//     fuel:100,
//     drive:()=>this.fuel--,
//     refuel:()=>this.fuel=100
// }

// const civic={
//     model:'Honda Civic',
//     color:'hotpink',
//     fuel:100,
//     drive:()=>this.fuel--,
//     refuel:()=>this.fuel=100
// }



// const makeCar = (carModel,carColor)=>{
//     return {model:carModel,color:carColor,fuel:100, drive:()=>{this.fuel--},refuel:()=>{this.fuel=100 }}}



const muhannad = new Person('Muhannad');
console.log(muhannad.speak());

const abdul = new Person('Abdulrahman');
console.log(abdul.speak());

const people = [muhannad, abdul]


const notMyCat = new Animal('Joe', 'Gamma', 600, 'wooohooo');
console.log(notMyCat.makeSound());
notMyCat.getOlder();
console.log(notMyCat.makeSound());


const bear = new Bird('yoyo', 73)
bear.getOlder()
bear.makeSound()

