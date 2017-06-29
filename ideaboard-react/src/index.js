// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router } from 'react-router-dom'

import NavBar from './components/NavBar'
import IdeaBoardsPage from './components/IdeaBoardsPage'

function App(){
  return (
    <div>
      <NavBar title="IdeaBoard" style='inverse'/>
      < IdeaBoardsPage />
    </div>
  )
}

ReactDOM.render(
  <Router>
    < App />
  </Router>,
document.getElementById('root'))
