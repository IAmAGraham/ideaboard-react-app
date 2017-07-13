import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import IdeaBoardsList from './IdeaBoardsList';
// import { Collapse, Carousel } from 'react-bootstrap';

export default class Landing extends Component {


    render(){

      return (
      <div>
      <div className="welcome-to-ideaboard">
        <div className="row">
          <div>
            <img className="welcome-to-ideaboard" src='./welcome-to-ideaboard.png' />
            <img className="welcome-to-ideaboard animated flip" src="./pencil.png" />
          </div>
        </div>
      </div>
      <Link to='/boards'><h3 className="welcome-to-ideaboard">Let's Ideate!</h3></Link>
      </div>

      )
    }
  }
