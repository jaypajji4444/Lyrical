import gql from 'graphql-tag';

const fetchSongs = gql`
{
    songs {
    id
    title
    }
}
`;

const fetchSong = gql`
query SongQuery($id: ID!) {
    song(id: $id) {
        id
        title
        lyrics {
            id
            content
            likes
        }
    }
}
`;


const deleteSong=gql`
mutation DeleteSong($id:ID){
    deleteSong(id:$id){
        id
    }
}
`

module.exports={
    fetchSongs,fetchSong,deleteSong
}