import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {likeLyricsMutation} from '../queries/fetchQueries'


class LyricList extends Component{

    addLike(id,likes){
        this.props.mutate({
            variables:{id:id},
            optimisticResponse:{
                // Specify mutation or query
                __typename:"Mutation",
                // Replicate what data is expected to be returned from server
                likeLyric:{
                    id:id,
                    __typename: "LyricType",
                    likes:likes + 1
                }

            }
        })
    }

    render(){
        
        let list=<li className="collection-item">Be the First To Add The Lyrics</li>
        if(this.props.lyrics.length!==0){
            list=this.props.lyrics.map(lyric=>{
                return (
                        <div className="row shadow-sm" key={lyric.id}>
                            <div className="col-sm-8">
                                {lyric.content}
                            </div>
                            <div className="col-sm-4 vote-box">
                                <i className="material-icons" onClick={()=>this.addLike(lyric.id,lyric.likes)}>thumb_up</i>{lyric.likes}
                            </div>
                        </div>
                )
            })
        }
        
        return(
        
            <div className="card">
        <div id="headingOne" className="card-header bg-white shadow-sm border-0">
            <h4 className="mb-0 font-weight-bold text-uppercase text-center">Song-Lyrics</h4>
        </div>
        <div  className="collapse show">
            <div className="card-body p-5">
            {list}
            </div>
        </div>
        </div>
        )
    }

}

export default graphql(likeLyricsMutation)(LyricList);