 import React, {Component} from 'react';
// import {Link, Switch, Route} from 'react-router-dom';
import StickyForm from './StickyForm'
// import StickyDetail from './StickyDetail'


export default class StickyList extends Component{

  constructor(props, context){
    super(props, context)
    this.state={
      stickies: [{id:1, content:''}]
    }
    this.createSticky = this.createSticky.bind(this)
    this.deleteSticky = this.deleteSticky.bind(this)
  }

  // renderCreateSticky = (props) => {
  //   const id= 0
  //   const sticky = this.state.stickies.find( s => s.id === parseInt(id) )
  //   return (<StickyDetail stickies={this.state.stickies} createSticky={this.createSticky} sticky={sticky} deleteSticky={this.deleteSticky} />)
  // }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/stickies')
      .then( res => res.json() )
      .then( data => this.setState({ stickies: data}) )
  }

  createSticky(content){
    fetch('http://localhost:3000/api/v1/stickies', {
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

  deleteSticky(id){
    fetch(`http://localhost:3000/api/v1/stickies/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
    })
  }

  render(){
    // debugger
    return(
      <div>
      <StickyForm sticky={this.stickies} onDelete={this.deleteSticky} onSubmit={this.createSticky}/>

      </div>
    )
  }
}
// export default function StickyList (props){
//   const {stickies, createSticky, deleteSticky, updateSticky}
//
//   return (
//     <div>
//     <StickyForm stickies={stickies} onSubmit={createSticky} onUpdate={updateSticky} onDelete={deleteSticky} />
//     </div>
//   )
//
// }



  // { this.props.map( (stick) => <li key={this.props.id}><StickyForm /></li>)}

// { this.renderCreateSticky() }
