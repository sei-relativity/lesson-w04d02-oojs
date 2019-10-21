import RecordAlbums from '/Album.js';
const PostMalone = new RecordAlbums('PostMalone', 'PostMalone01', ['Goodbyes', 'Circles', 'RockStar'], 'Circles')
console.log(PostMalone.nextSong());
console.log(PostMalone.previousSong());
