"use strict";
import Animal from "./animal.js";
export default class Bird extends Animal {
  constructor(name, age, canFly = true) {
    super(name, "Bird", age, "barrrrks", true);
    this.canFly = canFly;

    console.log("Do Passport?", this.hasPassport);
  }
  makeSound() {
    console.log(`${this.name} ${this.sound}`);
  }
}
