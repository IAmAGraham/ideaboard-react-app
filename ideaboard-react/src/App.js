import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="IdeaBoard" style='inverse' />
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
        </Switch>
      </div>
    );
  }
}

export default App;
