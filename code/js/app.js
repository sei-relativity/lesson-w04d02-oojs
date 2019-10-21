import Person from './person.js'
import Animal from './animal.js'
import RecordAlbums from './recordAlbums.js'
import Bird from './bird.js'
import ATM from './atm.js'


console.log('Person class')

const joe = new Person('joe')
console.log(joe.speak())
console.log('Animal class')

const cat = new Animal('ghost','cat',5,'Meow',true);
const tutle =new Animal('kame','tutle',36,' ')

console.log(cat.makeSound())
console.log(tutle.makeSound())
console.log('Bird class')

const boo = new Bird('boo',16)
console.log(boo.makeSound())

console.log('ATM class')
const lacc = new ATM ();

console.log(lacc.withdraw(100))
console.log(lacc.deposit(100))
console.log(lacc.deposit(70))
console.log(lacc.withdraw(50))
console.log(lacc.showBalance())
console.log(lacc.transactionHistory)

console.log('RecordAlbums class')

const kattun = new RecordAlbums ('KAT-TUN', 'cast', ['moonlight','one way love','vivid love','be alive','ask your self','new genesis'],'moonlight')

console.log(kattun.currentSong)
kattun.previousSong()
console.log(kattun.currentSong)
kattun.nextSong()
console.log(kattun.currentSong)
kattun.nextSong()
console.log(kattun.currentSong)
kattun.nextSong()
console.log(kattun.currentSong)
console.log(kattun.artistName)
console.log(kattun.albumName)

const westLife = new RecordAlbums ('WestLife',' ',['us aganist the world'])
console.log(westLife)
westLife.nextSong()
console.log(westLife.currentSong)
