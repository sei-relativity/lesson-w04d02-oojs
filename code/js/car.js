export default class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.fuel = 100;
    console.log("Car Constructors", this.model, this.color);
  }

  drive() {
    this.fuel--;
    return "Vroom!!";
  }
  refuel() {
    this.fuel++;
  }
}
