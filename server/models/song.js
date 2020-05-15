const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Lyrics model
const Lyric=require("./lyric")



const SongSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  lyrics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lyric'
  }]
});

// SongSchema.statics.addLyric =  function(id, content) {
  

//   return this.findById(id)  
//     .then(song => {
//       const lyric = new Lyric({ content, song })
  
//       song.lyrics[song.lyrics.length]=lyric
//       console.log(song.lyrics.length)

//       return Promise.all([lyric.save(), song.save()])
//         .then(([lyric, song]) => song).catch(err=>{console.log(err)})
//     });
// }

SongSchema.statics.findLyrics = function(id) {
  return this.findById(id)
    .populate('lyrics')
    .then(song => song.lyrics);
}

module.exports=mongoose.model('song', SongSchema);
