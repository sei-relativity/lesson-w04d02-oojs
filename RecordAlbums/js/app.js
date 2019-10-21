'strict mode';

class RecordAlbums {
    constructor(artistName, albumName, songs, currentSong) {
        this._artistName = artistName;
        this._albumName = albumName;
        this._songs = songs;
        this.currentSong = currentSong;
    }
    nextSong() {
        console.log(this._songs[this._songs.indexOf(this.currentSong) + 1])
    }
    previousSong() {
        console.log(this._songs[this._songs.indexOf(this.currentSong) - 1])
    }
    get artistName() {
        return this._artistName;
    }
    set artistName(newName) {
        this._artistName = newName;
        return this._artistName
    }
    get albumName() {
        return this._albumName;
    }
    set albumName(names) {
        this._albumName = names;
    }
    get songs() {
        return this._songs;
    }
    set songs(newSongs) {
        this._songs = newSongs;
    }
}