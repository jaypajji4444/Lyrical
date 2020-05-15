import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {Link} from "react-router"
import {addLyricsMutation} from "../queries/fetchQueries"


class CreateLyrics extends Component {
constructor(props) {
    super(props);
    this.state = { 
        content: '',
        show:false
    };
}

onSubmitHandler(event){
    event.preventDefault()
    this.props.mutate({
        variables:{
            content:this.state.content,
            songId:this.props.songId
        },
    })
    .then(data=>{
        this.setState({show:true,content:""})
        setTimeout(()=>{
            this.setState({show:false})
        },3000)
    
    })
}

onChangeHandler(event){
    this.setState({
        content:event.target.value
    })
}

render(){
console.log(this.props)
    return(
        <div className="mb-4">
        {this.state.show?<div className="text-center mt-4" style={{backgroundColor:"green"}}><h2 className="text-light">Lyrics Added</h2></div>:null}
                <h2 className="mt-4 ">Add lyrics to song!</h2>
                <div className="form">
                <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                    <div className="form-group">
                    <div className="input-label" style={{fontSize:"1.4rem"}}>
                        Lyric Content
                    </div>
                        <input className="form-control" style={{fontSize:"2rem"}}  value={this.state.content} onChange={(event)=>this.onChangeHandler(event)}/>
                    </div>
                    <button className="btn btn-primary ">Create</button>
                    <Link className="btn btn-primary f-5 text-light ml-2" to="/">Back</Link>
                </form>
                </div>
            </div>
    )
}
}



export default graphql(addLyricsMutation)(CreateLyrics)