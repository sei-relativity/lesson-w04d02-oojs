export default class recordAlbums{
    constructor(artistName, albumName, songs, currentSong){
        this.artistName = artistName;
        this.albumName = albumName;
        this.songs = songs;
        this.currentSong = currentSong;
    }

    nextSong(){
        let next = this.songs.indexOf(this.currentSong) + 1;
        return `Up next ${this.songs[next]}`;
    }

    previousSong(){
        let previous = this.songs.indexOf(this.currentSong) - 1;
        return `Previous song is ${this.songs[previous]}`;
    }

    currentSong(){
        return `You are listening to ${this.currentSong}`;
    }

}