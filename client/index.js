import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-client"
import {Route,Router,hashHistory,IndexRoute} from "react-router"
import "./style/style.css"
// importing thw componets
import SongList from "./components/SongList"
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import App from "./components/App"

const client=new ApolloClient({url:"/graphql"})

const Root = () => {
  return (
   <div className="outer">
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/new" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
    </div>
  
  )
};

ReactDOM.render(
  <Root  />,
  document.querySelector('#root')
);
