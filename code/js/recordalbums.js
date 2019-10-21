"use strict";
export default class RecordAlbums {
  constructor(artistName, albumName, songs = [], currentSong) {
    this.artistName = artistName;
    this.albumName = albumName;
    this.songs = songs;
    this.currentSong = currentSong;
  }
  nextSong() {
    const nextSoInd = this.songs.indexOf(this.currentSong);
    console.log(
      this.songs.length - 1 == nextSoInd ? songs[0] : songs[nextSoInd + 1]
    );
  }
  previousSong() {
    const nextSoInd = this.songs.indexOf(this.currentSong);
    console.log(
      nextSoInd == 0 ? songs[this.songs.length - 1] : songs[nextSoInd - 1]
    );
  }
  set artistName(newName) {
    this.artistName = newName;
  }
  get artistName() {
    return this.artistName;
  }
  set albumtName(newName) {
    this.albumName = newName;
  }
  get albumName() {
    return this.albumtName;
  }
  set songs(newArr) {
    this.songs = newArr;
  }
  get songs() {
    return this.songs;
  }
}
