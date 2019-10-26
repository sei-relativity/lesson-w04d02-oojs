
// ATM 

class ATM{
    constructor(type){
    this.type = type;
    this.money = 0;
    this.transactionHistory= [];
    }

    withdraw(drawAmount){
        this.money = this.money - drawAmount; 
        this.transactionHistory.push(-drawAmount);
        return this.money;
    }

    deposit(depositAmount){
        this.money = this.money + depositAmount;
        this.transactionHistory.push(depositAmount);
        return this.money;

    }

    showBalance(){
        console.log(this.money);
    }

}

const bank = new ATM('checking');
bank.deposit(100);
bank.withdraw(30);
bank.showBalance();


// RecordAlbums

class RecordAlbums{
    constructor(artistName, albumName, songs,currentSong ){
     this.artistName = artistName;
     this.albumName = albumName;
     this.songs = [];
     this.currentSong = this.songs[this.currentSong];
    }

    nextSong(){
console.log(this.songs[this.currentSong + 1 ]);
    }
    previousSong(){
console.log(this.songs[this.currentSong -1 ]);
    }
}

