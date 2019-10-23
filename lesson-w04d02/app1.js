"use strict";


import Animal from './animals.js';
// import * as Helpers from './helper.js';
import { add} from './helper.js';

console.log(Helpers.add(1,2))
console.log(Helpers.getRandom());

class Car {
    constructor(model, color) {
      this.model = model;
      this.color = color;
      this.fuel = 100;
  
      console.log('Car Constructor', this.model, this.color);
    }
  
    drive() {
      this.fuel--;
      return 'Vroom!';
    }
  
    refuel() {
      this.fuel = 100;
    }
  }
  
  const celica = new Car('BMW', 'hotpink');
  const civic = new Car('Honda Civic', 'blue');
  
  console.log(celica.drive());