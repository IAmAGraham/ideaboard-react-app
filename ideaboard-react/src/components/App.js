import React, { Component } from 'react';
import {Route} from 'react-router-dom';


import NavBar from './NavBar';
import IdeaBoardsPageContainer from '../containers/IdeaBoardsPageContainer';


export default class App extends Component {

  render() {
    return (


      <div className="App">
      <NavBar title="IdeaBoard" style='inverse' />
      <Route path='/boards' component={IdeaBoardsPage} />
      <Route path='/about' render={ () => {
        return <p>Quick about page</p>
      }} />
      </div>
    );
  }
}
