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
                return (
                    <li className="collection-item" key={song.id}>
                <div className="row">
                    <div className="col-sm-8"><span className="text-info font-weight-bold" style={{fontSize:"2rem"}}>{song.title}</span></div>
                    <div className="col-sm-2"><Link className="btn-floating blue btn-large text-center"  to={`/song/${song.id}`}><i className="material-icons">add</i></Link></div>
                    <div className="col-sm-2"><button className="btn-floting red btn-large text-center mr-1"  onClick={(event)=>this.deleteHandler(event,song.id)}><i className="material-icons">delete</i></button></div>
                </div>
                    </li>)
            })
        }
        return(
            <div >
            <h1 className="text-center">Welcome To Lyrical</h1>
            {this.state.show?<div className="text-center mt-4" style={{backgroundColor:"green"}}><h2 className="text-light"> Deleted Successfully !!!</h2></div>:null}
                <ul className="collection mt-5"> {lists}</ul>
                <div className="mt-3 text-center">
                <span className="font-weight-bold text-light ml-2 ">Add a New Song?</span><Link className="btn-floating blue btn-large text-center ml-3"  to="/song/new"><i className="material-icons">add</i></Link>
                </div>
            </div>
        )
    }
}


export default graphql(deleteSong)(graphql(fetchSongs)(SongList))