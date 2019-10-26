'use strict'

import animals from "./js/animals.js";
import bird from "./js/bird.js";
import * as helper from "./js/helper.js";
import person from "./js/person.js";

import atm from "./js/atm.js";
import recordAlbums from "./js/recordAlbums.js";

const newAccount = new atm("cheaque", "20000");
console.log(newAccount);

newAccount.deposit(3000);
newAccount.currentBalance();

newAccount.withdraw(2000);
newAccount.currentBalance();


const postMalone = new recordAlbums("Post Malone", "Hollywood's Bleeding", ["Hollywood's Bleeding","Circles", "Die For Me", "I'm Gonna Be"], "Circles");
postMalone.nextSong();
postMalone.currentSong();
postMalone.previousSong();






