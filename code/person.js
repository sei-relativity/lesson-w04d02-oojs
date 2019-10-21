'use strict'
export default class Person {
    constructor(name){
        this.name = name;
        this.spececies = 'Homo Sapiens';
    }

    speak(){
        return `Hello. I'm ${this.name}`;
    }
}

const muhannad = new Person('Muhannad');
console.log(muhannad.speak()); //Heloo
const abdulrahaman = new Person('Abdulrahaman');
console.log(abdulrahaman.speak());


const peopel = [muhannad,abdulrahaman];



