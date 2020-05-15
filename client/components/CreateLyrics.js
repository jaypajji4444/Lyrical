import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
constructor(props) {
    super(props);
    this.state = { 
        content: '',
        show:false
    };
}

onSubmitHandler(event,id){
    event.preventDefault()
    this.props.mutate({
        variables:{
            content:this.state.content,
            songId:id
        },
    })
    .then(data=>{
        this.setState({show:true,title:""})
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
    return(
        <div className="mb-4">
        {this.state.show?<div className="text-center mt-4" style={{backgroundColor:"green"}}><h2 className="text-light">Lyrics Added</h2></div>:null}
                <h2>Add lyrics to song!</h2>
                <div className="form">
                <form onSubmit={(event)=>this.onSubmitHandler(event,this.props.params.id)}>
                    <div className="form-group">
                    <div className="input-label">
                        Lyric Content
                    </div>
                        <input className="form-control" value={this.state.content} onChange={(event)=>this.onChangeHandler(event)}/>
                    </div>
                    <button className="btn btn-primary ">Create</button>
                    <Link className="btn btn-primary f-5 text-light ml-2" to="/">Back</Link>
                </form>
                </div>
            </div>
    )
}
}