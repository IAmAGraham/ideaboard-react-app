import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StickyList from './StickyList'
// import StickyForm from './StickyForm'
import {StickiesAdapter} from '../adapters';


export default class IdeaBoardDetail extends Component {
  constructor(){
    super();
    this.state = {
      // add: true,
      stickies: []
    }
    // this.createSticky = this.createSticky.bind(this)
    // this.deleteSticky = this.deleteSticky.bind(this)
    // this.updateSticky = this.updateSticky.bind(this)
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/boards')
  //     .then( res => res.json() )
  //     .then( data => this.setState({ stickies: data}) )
  // }

  // createSticky(content){
  //   debugger
  //   fetch('http://localhost:3000/api/v1/boards', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       sticky: {content: content}
  //     })
  //   }).then(response => response.json() )
  //     .then(sticky => this.setState( (previousState) => {
  //       return {
  //         stickies: [...previousState.stickies, sticky]
  //       }
  //     })
  //   )
  // }
  //
  // deleteSticky(id){
  //   StickiesAdapter.deleteSticky(id)
  //   .then( () => {
  //     this.setState( previousState => {
  //       return {
  //         stickies: previousState.sticky.filter( sticky => sticky.id !== id)
  //       }
  //     })
  //   })
  // }

  // updateSticky = (newText, id) => {
  //   // persist in  database
  //   this.setState(previousState => {
  //     let stickies = previousState.stickies.map( sticky =>(
  //       sticky.id !== id ? sticky : {...sticky, sticky: newText }
  //     ))
  //     return {
  //       stickies: stickies
  //     }
  //   })
  // }

  //problem
  // add = () => {
  //   // debugger
  //   this.setState(previousState=>(
  //     {
  //       stickies: [...previousState.stickies, { id: this.nextId() }]
  //     }
  //   ))
  // }






  render(){
    if (!this.props.board){
      return null
    }
    // debugger
    return (
      <div>
      <div>
      <h2>{this.props.board.title}</h2>

      </div>

      <div className='row'>

        <div className='col-md-4'>
          <StickyList stickies={this.state.stickies} key={this.state.stickies.id} id={this.state.stickies.id} onSave={this.updateSticky} onSubmit={this.handleSubmit} onRemove={this.remove}/>
        </div>



      </div>
      </div>
    )
  }
}




// <StickyForm createSticky={this.createSticky} onSubmit={this.createSticky}/>
