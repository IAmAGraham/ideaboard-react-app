import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import '../postitnote.css'

export default function IdeaBoardItem(props){
    return(



      <Draggable>
      <div className="container bootstrap snippet">
        <div className="row">
          <ul className="notes">
            <li key={this.props.board.id}>
              <div className="rotate-1 lazur-bg">
                <textarea>You can type in here</textarea>
                <a href=`/boards/${this.props.board.id}` className="text-danger pull-right" onClick{ () => this.props.deleteSticky(this.props.board.id)}><i className="fa fa-trash-o "></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </Draggable>
    )
}
