const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const {addSong,addSongLyrics,likeSongLyrics,deleteSong} =require("./mutationFuntions")
const SongType = require('./song_type');
const LyricType = require('./lyric_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return addSong(title).then(res=>res).catch(err=>console.log(err))
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
  
        return addSongLyrics(songId,content)
        .then(res=>{
          return res
        })
        .catch(err=>console.log(err))
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return likeSongLyrics(id).then(res=>res).catch(err=>console.log(err))
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return deleteSong(id).then(res=>res).catch(err=>err)
      }
    }
  }
});

module.exports = mutation;
