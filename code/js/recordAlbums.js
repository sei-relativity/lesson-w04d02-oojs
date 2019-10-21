export default class RecordAlbums {

  constructor(artistName, albumName, songs = [], currentSong = '') {
    this.artistName = artistName;
    this.albumName = albumName;
    this.songs = songs;
    if (songs.length!=0){
    this.currentSong = songs[0]
    }else{
    this.currentSong = currentSong}
  }

  nextSong() {
    if (this.songs.indexOf(this.currentSong) === this.songs.length - 1) {
      this.currentSong = this.songs[0]
      return this.currentSong
    } else {
      this.currentSong = this.songs[this.songs.indexOf(this.currentSong) + 1]
      return this.currentSong
    }
  }

  previousSong() {
    if (this.currentSong === this.songs[0]) {
      this.currentSong = this.songs[this.songs.length - 1]
      return this.currentSong
    } else {
      this.currentSong = this.songs[this.songs.indexOf(this.currentSong) - 1]
      return this.currentSong
    }
  }
}