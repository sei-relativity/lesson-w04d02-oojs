"use strict";
export default class RecordAlbums {
  constructor(artistName, albumName, songs, currentSong) {
    this.artistName = artistName;
    this.albumName = albumName;
    this.songs = songs;
    this.currentSong = currentSong;
  }
  nextSong() {
    const nextSoInd = this.songs.indexOf(this.currentSong);
    console.log(
      this.songs.length - 1 == nextSoInd
        ? this.songs[0]
        : this.songs[nextSoInd + 1]
    );
  }
  previousSong() {
    const nextSoInd = this.songs.indexOf(this.currentSong);
    console.log(
      nextSoInd == 0
        ? this.songs[this.songs.length - 1]
        : this.songs[nextSoInd - 1]
    );
  }
  // set artistName(artistName) {
  //   this.artistName = artistName;
  // }
  // get artistName() {
  //   return this.artistName;
  // }
  // set albumtName(albumName) {
  //   this.albumName = albumName;
  // }
  // get albumName() {
  //   return this.albumtName;
  // }
  // set songs(songs) {
  //   this.songs = songs;
  // }
  // get songs() {
  //   return this.songs;
  // }
}
