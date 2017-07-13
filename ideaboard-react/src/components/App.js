import Landing from './Landing'
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import IdeaBoardsPage from './IdeaBoardsPage'
// import IdeaBoardsPageContainer from '../containers/IdeaBoardsPageContainer';
import {AuthAdapter} from '../adapters'

export default class App extends Component{

  render(){

    return (
      <div className="App">
        <NavBar title="IdeaBoard" style='inverse' />
        <div>
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
            <Route path='/boards' render={() => <IdeaBoardsPage />} />
            <Route path='/about' render={ () => {
              return <p>This is an app where users can ideate together using sticky notes</p> }} />

          </Switch>
        </div>
      </div>
    )
  }
}
