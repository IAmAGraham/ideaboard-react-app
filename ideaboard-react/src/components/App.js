import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import {BoardsAdapter} from '../adapters';
import Board from './Board'


import NavBar from './NavBar';
// import IdeaBoardsPageContainer from '../containers/IdeaBoardsPageContainer';


export default class App extends Component {

  render() {
    return (


      <div className="App">
      <NavBar title="IdeaBoard" style='inverse' />
      <Route path='/boards' component={Board} />
      <Route path='/about' render={ () => {
        return <p>Quick about page</p>
      }} />
      </div>
    );
  }
}
