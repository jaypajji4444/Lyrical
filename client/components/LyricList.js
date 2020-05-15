import React, { Component } from 'react';
import { graphql } from 'react-apollo';


class LyricList extends Component{

    render(){
        console.log(this.props.lyrics)
        let list=<li className="collection-item">Be the First To Add The Lyrics</li>
        if(this.props.lyrics.length!==0){
            list=this.props.lyrics.map(lyric=>{
                return (
                        <div className="row shadow-sm">
                            <div className="col-sm-8">
                                {lyric.content}
                            </div>
                            <div className="col-sm-4 vote-box">
                                <i className="material-icons">thumb_up</i>{lyric.likes}
                            </div>
                        </div>
                )
            })
        }
        
        return(
            <div className="card">
        <div id="headingOne" className="card-header bg-white shadow-sm border-0">
            <h4 className="mb-0 font-weight-bold text-uppercase text-center">Hello Word</h4>
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

export default LyricList