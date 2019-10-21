"use strict";
export default class Person {
  constructor(name) {
    this.name = name;
    this.species = "Homo Erectus";
  }
  speak() {
    return `Hello! I'm ${this.name}, I'm a ${this.species}; I'm Simple upright man!`;
  }
}
