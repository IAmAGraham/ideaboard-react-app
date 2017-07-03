import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';


export default function IdeaBoardsList(props){
  return(

    <div>
      <h2>BoardsList</h2>

      <Switch>
        <Route path='/boards/new' />
        <Route render={ () => <Link to='/boards/new'>Add a Board</Link> } />
      </Switch>
    </div>
  )
}
