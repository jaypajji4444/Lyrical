import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-client"
import {Route,Router,hashHistory,IndexRoute} from "react-router"

// importing thw componets
import SongList from "./components/SongList"
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import App from "./components/App"

const client=new ApolloClient({url:"/graphql"})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/create" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
