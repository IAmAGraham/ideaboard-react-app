import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import '../sidebar.css'

export default function IdeaBoardsList(props){
  return(
    <div>

      <div className="flex-container" >
        <div className="main">
          <nav >
          <h2>BoardsList</h2>
            <ul >
              { props.boards.map( (board) =>
                <li key={board.id}><Link to={`/boards/${board.id}`}>{ board.title }</Link></li>)}
            </ul>
          </nav>
        </div>
      <Switch>
        <Route path='/boards/new' />
        <Route render={ () => <Link to='/boards/new'><button>Add a Board</button></Link> } />
      </Switch>
      </div>
    </div>
  )
}
