import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import '../sidebar.css'

export default function IdeaBoardsList(props){
  return(
    <div>
      <div>
        <div>
          <div>
            { props.boards.map( (board) =>
              <p key={board.id}><Link to={`/boards/${board.id}`}>{ board.title }</Link></p>)}
          </div>
        </div>
      <Switch>
        <Route path='/boards/new' />
        <Route render={ () => <Link to='/boards/new'><button>Add a Board</button></Link> } />
      </Switch>
    </div>
  </div>
  )
}
