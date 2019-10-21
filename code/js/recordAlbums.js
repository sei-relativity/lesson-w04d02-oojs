export default class RecordAlbums {
    constructor (artistName, albumName, songs, currentSong){
        this.artistName = artistName;
        this.albumName = albumName;
        this.songs = songs;
        this.currentSong = currentSong;
    }

    nextSong(){
        let next =  this.songs.indexOf(this.currentSong) + 1;
        return this.songs[next];
    }
    previousSong(){
        let prv =  this.songs.indexOf(this.currentSong) - 1;
        return this.songs[prv];
    }
}



