import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';


export default function IdeaBoardsList(props){
  return(

    <div>
      <h2>BoardsList</h2>
      <ul>

      { props.boards.map( (board) => <li key={board.id}><Link to={`/boards/${board.id}`}>{ board.title } - { board.description}</Link></li>)}

      </ul>
      <Switch>
        <Route path='/boards/new' />
        <Route render={ () => <Link to='/boards/new'>Add a Board</Link> } />
      </Switch>
    </div>
  )
}
