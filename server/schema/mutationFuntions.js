const Song=require("../models/song");
const Lyric=require("../models/lyric");





const addSong=async(title)=>{
    const song= await Song.create({title:title});
    await song.save()
    return song;
}

const addSongLyrics=async(id,content)=>{
    const song=await Song.findById(id)
    const lyric=await Lyric.create({song:song._id,content:content})
    await lyric.save()
    song.lyrics.push(lyric._id)
    await song.save()
    return song;
}


const likeSongLyrics=async(id)=>{
    const lyric= await Lyric.findById(id)
    lyric.likes=lyric.likes+1;
    await lyric.save()
    return lyric
}

const deleteSong=async(id)=>{
    const song=await Song.findByIdAndDelete(id)
    return song;
}

module.exports={addSong,addSongLyrics,likeSongLyrics,deleteSong}