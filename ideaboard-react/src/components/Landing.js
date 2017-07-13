import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import IdeaBoardsList from './IdeaBoardsList';
// import { Collapse, Carousel } from 'react-bootstrap';

export default class Landing extends Component {


    render(){

      return (
        
      <div className="container-fluid">
        <div className="row text-center ">
          <div className="col-md-12">
            <h1><img src='./welcome-to-ideaboard.png' /></h1>
          <h4 className="animated rotateInDownLeft"><img src="./230329.png" /></h4>
          </div>
        </div>
      </div>

      )
    }
  }


  // <div className="container bootstrap snippet">
  // <div className="row">
  // <div className="sticky">
  // <div className="rotate-1 lazur-bg">
  // <Route render={ () => <Link to='/boards'>View All Boards</Link>
  // </div>
  // </div>
  // </div>
  // </div>
  // </div>
