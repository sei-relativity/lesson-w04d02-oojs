
'use strict'
import RecordAlbums  from './alboum.js';

const song = new RecordAlbums('song', 'Adeel', ['set fire', 'someone like u', ], 'Adeel')
console.log(song.nextSong());
console.log(song.previousSong());
