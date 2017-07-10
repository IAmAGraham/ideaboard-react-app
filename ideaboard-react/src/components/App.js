import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Landing from './Landing';
import NavBar from './NavBar';
import Login from './Login'
import IdeaBoardsPageContainer from '../containers/IdeaBoardsPageContainer';
import {AuthAdapter} from '../adapters'


export default class App extends Component {

    constructor(){
      super()
      this.state = {
        auth: {
          isLoggedIn: false,
          user: {}
        }
      }
      this.logIn = this.logIn.bind(this)
    }

    componentDidMount(){
      if (localStorage.getItem('jwt')) {
        AuthAdapter.currentUser()
          .then(user => {
            if (!user.error) {
              this.setState({
                auth: {
                  isLoggedIn: true,
                  user: user
                }
              })
            }
          })
      }
    }

    logIn(loginParams){
      AuthAdapter.login(loginParams)
        .then( user => {
          if (!user.error) {

            this.setState({
              auth: { isLoggedIn: true, user: user}
            })
            localStorage.setItem('jwt', user.jwt )
          }
        })
    }

    render(){
      let title
      if (this.state.auth.isLoggedIn) {
        title = this.state.auth.user.username
      } else {
        title = 'Welcome to the app'
      }

      return (

        <div>
          <NavBar title="IdeaBoard" style='inverse' />
          <Route exact path='/' render={() => <Landing />} />
          <Route path='/boards' component={IdeaBoardsPage} />
          <Route path='/about' render={ () => {
            return <p>This is an app where users can ideate together using sticky notes</p> }} />
        <Route path='/login' render={() => <Login onSubmit={this.logIn}/>} />
        </div>

      )
    }
  }
