export default class Animal{
  constructor(name,type,age,sound, hasPassport = false){
    this.name = name;
    this.type=type;
    this.age=age;
    this.sound=sound;
    this.hasPassport = hasPassport;
  }

  makeSound(){
    return `${this.sound}! Hello I'm a ${this.type} and I'm ${this.age} years old`;
  }
  getOlder(){
    this.age++
    console.log(`I'm ${this.age} years old`)
  }
}