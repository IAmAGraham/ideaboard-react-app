import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import BoardsAdapter from '../adapters';

// import StickyForm from './StickyForm';
// import StickyList from './StickyList';
// import StickyDetail from './StickyDetail';


export default class StickyPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stickies: [{id:null, content:""}]
    }
    this.createSticky = this.createSticky.bind(this)
  }

  componentDidMount(){
    return fetch('http://localhost:3000/api/v1/boards')
      .then( res => res.json() )
      .then( data => this.setState({ stickies: data}) )
  }

  createSticky(content){
    debugger
    return fetch('http://localhost:3000/api/v1/boards', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        sticky: {content: content}
      })
    }).then(response => response.json() )
      .then(sticky => this.setState( (previousState) => {
        return {
          stickies: [...previousState.stickies, sticky]
        }
      })
    )
  }
  //
  // deleteBoard(id){
  //   BoardsAdapter.destroy(id)
  //   .then( () => {
  //     this.setState( previousState => {
  //       return {
  //         boards: previousState.boards.filter( board => board.id !== id)
  //       }
  //     })
  //   })
  // }
  //
  deleteSticky(id){
    BoardsAdapter.deleteSticky(id)
    .then( () => {
      this.setState( previousState => {
        return {
          stickies: previousState.sticky.filter( sticky => sticky.id !== id)
        }
      })
    })
  }


  render(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          <StickyList stickies={this.state.stickies} />
        </div>
        <div className='col-md-8'>
        <Switch>
          <Route path='/stickies/new' render={ () => <StickyForm createSticky={this.createSticky} onSubmit={this.createSticky}/>} />
          <Route path='/stickies/:id' render={ (routerProps) => {
            const id= routerProps.match.params.id
            const sticky = this.state.stickies.find( s => s.id === parseInt(id) )
            return <StickyDetail createSticky={this.createSticky} sticky={sticky} deleteSticky={deleteSticky} />
          }} />
          <Route path='stickies/:id/edit' render={(routerProps) => {
            const id= routerProps.match.params.id
            const sticky = stickies.find( s => s.id === parseInt(id) )
            if (!sticky) {
              return null
            }
            return <StickyForm sticky={sticky} createSticky={this.createSticky} onSubmit={updateSticky} submitText="Update Student" />
          }} />
          </Switch>
        </div>
      </div>
    )
  }
}
