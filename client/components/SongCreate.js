
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component{
    constructor(props){
        super(props)
        this.state={
            title:"",
            show:false
        }
    }
    onSubmitHandler(event){
        event.preventDefault()
        this.props.mutate({
            variables:{title:this.state.title}
        })
        .then(data=>{
            this.setState({show:true,title:""})
            setTimeout(()=>{
                this.setState({show:false})
            },3000)
            hashHistory.push("/")
        })
    }

    onChangeHandler(event){
        this.setState({
            title:event.target.value
        })
    }

    render(){
        return(
            <div className="mb-4">
        {this.state.show?<div className="text-center mt-4" style={{backgroundColor:"green"}}><h2 className="text-light">Successfully Added</h2></div>:null}
                <h2>Create A New Song!</h2>
                <div className="form">
                <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                    <div className="form-group">
                    <div className="input-label">
                        Song Title
                    </div>
                        <input className="form-control" value={this.state.title} onChange={(event)=>this.onChangeHandler(event)}/>
                    </div>
                    <button className="btn btn-primary ">Create</button>
                    <Link className="btn btn-primary f-5 text-light ml-2" to="/">Back</Link>
                </form>
                </div>
            </div>
        )
    }
}

// Mutation
const mutation=gql`
mutation AddSong($title:String!){
    addSong(title:$title){
        id,title
    }
}
`

export default graphql(mutation)(SongCreate);