import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import '../postitnote.css'

export default class IdeaBoardItem extends Component{

    constructor(props){
      super(props);
      this.state = {
        boards: []
      }
    }


    render(){
      debugger
      return(



        <Draggable>
        <div className="container bootstrap snippet">
        <div className="row">
        <ul className="notes">
        <li >
        <div className="rotate-1 lazur-bg">
        <textarea>You can type in here</textarea>

        </div>
        </li>
        </ul>
        </div>
        </div>
        </Draggable>
      )
    }
}
