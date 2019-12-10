'use strict';

import Animal from './animal.js';
import * as Helpers from './helper.js';
 
console.log(Helpers.add(1,2));
console.log(Helpers.getRandom());

/*const celica ={
model: 'Honda civic',
color :'hotpink',
fuel:100,
drive: funtion(){
this.fuel--;
},
refuel: funtion(){
    this.fuel=100;
    }
}

const celica ={
    model: 'Toy-Yoda',
    color :'red',
    fuel:100,
    drive: funtion(){
    this.fuel--;
    },
    refuel: funtion(){
        this.fuel=100;
        }
    }

    //Create a makeCar Function - Lab
    // This should return a car object just like the previous example
    const celica = makeCar("Toy-Yoda Celica", "limegreen");

function makeCar(model,color){
    this.celica("Toy-Yoda Celica", "limegreen");

}

////////////////////

class Person {

    constructor(name){
        this.name=name;
        this.species=`Homo sapiens`;
    }

    speak(){
        return `Hello iam $(this .name)`;
    }
}
const muhannad = new Person(`muhannad`);
console .log (muhannad.speak());

const abdulrahmanm= new Person(`abdulrahmanm`);
console .log (abdulrahmanm.speak() );

///////////
*/


const notMyCat = new Animal ('Joe','cat',2,'mooo');
console.log(notMyCat.makeSound());
notMyCat.getOlder();
console.log(notMyCat.makeSound());

class Bird extends Animal{

    constructor(name,age, canFly= true){
        super(name, 'bird',age,'Barks');
        this.canFly= canFly;
    }
    makeSound(){
    console.log(`${this.name}barks.`);
}


const bear =new Bird('Bear',5);
console.log(bear.makeSound());
bear.getOlder();
console.log(bear.getOlder());




