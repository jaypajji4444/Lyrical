import React,{Component} from "react";
import {graphql} from "react-apollo";
import gql from "graphql-tag";
import  {Link} from "react-router"
import {fetchSongs} from "../queries/fetchQueries"



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
                <div className="mt-3 text-center">
                    <Link className="btn-floating blue btn-large"  to="/song/new"><i className="material-icons">add</i></Link>
                </div>
            </div>
        )
    }
}


export default graphql(fetchSongs)(SongList)