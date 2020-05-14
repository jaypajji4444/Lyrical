
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component{
    constructor(props){
        super(props)
        this.state={
            title:""
        }
    }
    onSubmitHandler(event){
        event.preventDefault()
    }

    onChangeHandler(event){
        this.setState({
            title:event.target.value
        })
    }

    render(){
        return(
            <div>
                <h2>Create A New Song!</h2>
                <div className="form">
                <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                    <div className="form-group">
                    <div className="input-label">
                        Song Title
                    </div>
                        <input className="form-control" value={this.state.value} onChange={(event)=>this.onChangeHandler(event)}/>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                </div>
            </div>
        )
    }
}

export default SongCreate