'use strict'
import Bird from './bird.js';
import Animal from './animal.js'
import * as helpers from './helper.js';
import Atm from './atm.js';
import RecordAlbums from './recordAlbums.js';

const newAccount = new Atm('cheaquing', 10000);
// console.log(newAccount.money);
// newAccount.deposit(50000);
// console.log(newAccount.transactionHistory);


const zed = new RecordAlbums('zed', 'clarity', ['clarity', 'mario', 'zelda'], 'mario')
console.log(zed.nextSong());
console.log(zed.previousSong());




// const notMyCat = new Animal("kitty", 'cat', 2, 'Nyaa!', true);
// const bear = new Bird('Bear', 5);

// console.log(bear.makeSound());
// console.log(helpers.life);

