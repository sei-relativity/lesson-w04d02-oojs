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
  setArtistName(artistName) {
    this.artistName = artistName;
  }
  getArtistName() {
    return this.artistName;
  }
  setAlbumtName(albumName) {
    this.albumName = albumName;
  }
  getAlbumName() {
    return this.albumtName;
  }
  setSongs(songs) {
    this.songs = songs;
  }
  getSongs() {
    return this.songs;
  }
}
