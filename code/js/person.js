export default class Person {

  constructor(name){
    this.name= name;
    this.species = "Homo Spaiens";
  }

  speak(){
    return `Hello! I'm ${this.name}`;
  }
}
