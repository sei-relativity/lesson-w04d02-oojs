"use strict";
const celica = {
  model: "Toy-Yoda Celica",
  color: "red",
  fuel: 100,
  drive: function() {
    this.fuel--;
  },
  refuel: function() {
    this.fuel = 100;
  }
};
const civic = {
  model: "Honda Civic",
  color: "hotpink",
  fuel: 100,
  drive: function() {
    this.fuel--;
  },
  refuel: function() {
    this.fuel = 100;
  }
};

//  this is a helper function to recreate the objects
const makeCar = function(model, color, fuel = 50) {
  return {
    model: model,
    color: color,
    fuel: fuel,
    drive: function() {
      this.fuel--;
    },
    refuel: function() {
      this.fuel = 100;
    }
  };
};

const celica = makeCar("Toy-Yoda Celica", "limegreen", 2000);
