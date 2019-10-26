"use strict";

import Car from "./car.js";
import Person from "./person.js";
import Animal from "./animal.js";
import Bird from "./bird.js";
import * as Helpers from "./helper.js";
import ATM from "./atm.js";
import RecordAlbums from "./recordalbums.js";

/////     Car class     \\\\\
const celica = new Car("BMW", "lightpink");
const civic = new Car("Honda Civic", "Blue");
console.log(celica.drive());
console.log(civic.drive());

/////     Person class     \\\\\
const muhannad = new Person("Muhannad");
console.log(muhannad.speak());

const abdulrahman = new Person("abdulrahman");
console.log(abdulrahman.speak());

/////     Animal class     \\\\\
const notMyCat = new Animal("Joe", "Cat", 2, "Meow");
const myCat = new Animal("Joeseph", "Caterpillar", 100, "phishhhhh", true);
console.log(notMyCat.makeSound());
notMyCat.getOlder();
console.log(notMyCat.makeSound());

console.log(myCat.makeSound());
myCat.getOlder();
console.log(myCat.makeSound());

/////     Bird class     \\\\\
const bear = new Bird("Bear", 5);
console.log(bear.makeSound());
bear.getOlder();
console.log(bear.makeSound());

/////     Helpers     \\\\\
console.log(Helpers.add(1, 2));
console.log(Helpers.getRandom());

/////     ATM class     \\\\\
const userChecking = new ATM("checking");
userChecking.deposit(10000);
console.log(userChecking.money);
userChecking.showBalance();
userChecking.withdraw(1000);
userChecking.showBalance();
console.log(userChecking.transactions);

/////     RecordAlbums class     \\\\\
const album = new RecordAlbums(
  "MJ",
  "Red Album",
  ["cool", "day", "night", "morning", "midnight"],
  "night"
);
album.nextSong();
album.previousSong();
album.setArtistName("50 cent");
console.log(album.getArtistName());
