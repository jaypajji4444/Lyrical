import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import {fetchSong} from "../queries/fetchQueries"
import CreateLyrics from "../components/CreateLyrics"
import LyricList from "../components/LyricList"

class SongDetail extends Component {
    
    render(){
        const {song}=this.props.data
        if(!song){
            return <div><h2 className="text-center mt-2">Loading The Songs....</h2></div>
        }
        return(
            <div>
                <h1 className="text-center">{song.title}</h1>
                <CreateLyrics songId={this.props.params.id} />
                <LyricList lyrics={song.lyrics} />
            
            </div>
        )
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.params.id } } }
  })(SongDetail);