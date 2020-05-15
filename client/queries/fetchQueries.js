import gql from 'graphql-tag';

const fetchSongs = gql`
{
    songs {
    id
    title
    }
}`;

const fetchSong = gql`
query SongQuery($id: ID!) {
    song(id: $id) {
        id
        title,
        lyrics{
            id,content,likes
        }
        
    }
}`;

const deleteSong=gql`
mutation DeleteSong($id:ID){
    deleteSong(id:$id){
        id
    }
}
`


const addLyricsMutation=gql`
mutation AddLyrics( $songId: ID , $content: String ) {
    addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      id
      content
      likes
    }
  }
}
`;




module.exports={
    fetchSongs,fetchSong,deleteSong,addLyricsMutation
}