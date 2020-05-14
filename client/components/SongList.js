import React,{Component} from "react"
import {graphql} from "react-apollo"
import gql from "graphql-tag"



class SongList extends Component{
    render(){
        let lists=<div><h2 className="text-center mt-4">Loading The Songs....</h2></div>
        if(!this.props.data.loading){
            lists=this.props.data.songs.map(song=>{
                return <li className="collection-item" key={song.id}><h1 className="text-primary">{song.title}</h1></li>
            })
        }
        return(
            <div>
                <ul className="collection mt-5"> {lists}</ul>
            </div>
        )
    }
}

// GraphQL Query
const query=gql`
{
    songs{
        id,
        title
    }
}
`
export default graphql(query)(SongList)