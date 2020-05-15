import React,{Component} from "react";
import {graphql} from "react-apollo";
import gql from "graphql-tag";
import  {Link} from "react-router"
import {fetchSongs,deleteSong} from "../queries/fetchQueries"



class SongList extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }

    deleteHandler(event,id){
        event.preventDefault()
        this.props.mutate({
            variables:{id:id},
            
        })
        .then(data=>{
            this.props.data.refetch() // REfetched query associated with this component i.e =>graphql(fetchSongs)(component)=>fetchSongs
            this.setState({show:true})
            setTimeout(()=>{
                this.setState({show:false})
            },2000)
        })

    }

    render(){
        let lists=<div><h2 className="text-center mt-4">Loading The Songs....</h2></div>
        if(!this.props.data.loading){
            lists=this.props.data.songs.map(song=>{
                return (<li className="collection-item" key={song.id}>
                <span className="text-info font-weight-bold" style={{fontSize:"2rem"}}>{song.title}</span>
                <button className="text-light red right "  onClick={(event)=>this.deleteHandler(event,song.id)}>X</button>
                </li>)
            })
        }
        return(
            <div >
            <h1 className="text-center text-dark">Welcome To Lyrical</h1>
            {this.state.show?<div className="text-center mt-4" style={{backgroundColor:"green"}}><h2 className="text-light"> Deleted Successfully !!!</h2></div>:null}
                <ul className="collection mt-5"> {lists}</ul>
                <div className="mt-3 text-center">
                    <Link className="btn-floating blue btn-large"  to="/song/new"><i className="material-icons">add</i></Link>
                </div>
            </div>
        )
    }
}


export default graphql(deleteSong)(graphql(fetchSongs)(SongList))