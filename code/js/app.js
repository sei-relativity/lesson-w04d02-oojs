'use strict'

import Animal from './animal.js';
import * as Helpers from './helper.js';
import Car from './car.js';
import Person from './person.js';
import Bird from './bird.js';
import Atm from './atm.js';
import RecordAlbums from './recordAlbums.js'

console.log(Helpers.add(1, 2));
console.log(Helpers.getRandom());


const celica = new Car('BMW', 'hotpink');
const civic = new Car('Honda Civic', 'blue');

console.log(celica.drive());
console.log(civic.drive());

const muhannad = new Person('muhannad');
console.log(muhannad.speak());

const abdulrahman = new Person('Abdulrahman');
console.log(abdulrahman.speak());

const people = [muhannad, abdulrahman];




const myCat = new Animal('Joe', 'cat', 2, 'mooo');

console.log(myCat.makeSound());

myCat.getOlder();

console.log(myCat.makeSound());



const bear = new Bird('Bear', 5);

console.log(bear.makeSound());

bear.getOlder();

console.log(bear.makeSound());

const hamad = new Atm('checking', 100);
console.log(hamad.showBalance());
hamad.deposit(100);
console.log(hamad.showBalance());
hamad.withdraw(50);
console.log(hamad.showBalance());
hamad.withdraw(200);
console.log(hamad.showBalance());

