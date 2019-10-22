class RecordAlbums{
    constructor(Csongs){
artistName='Adele';
albumName='Hello';
songs=['Hello','Someone Like you','Set Fire to the Rain'];
currentSong=[];
    }
nextSong(){
    this.currentSong = this.songs++;
    return this.currentSong;
}
previousSong(){
    this.currentSong = this.songs--;
    return this.currentSong;
}

}