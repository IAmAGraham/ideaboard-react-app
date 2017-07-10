import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StickyList from './StickyList'
// import StickyForm from './StickyForm'
import {StickiesAdapter} from '../adapters';


export default class IdeaBoardDetail extends Component {
  constructor(){
    super();
    this.state = {
      add: true,
      stickies: [{id: 1, content:'', board_id: "", x:"", y:""}]
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

  add = () => {
    this.setState(previousState=>(
      {
        stickies: [...previousState.stickies, { id: this.nextId(), sticky: 'New Sticky'}]
      }
    ))
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  remove = (id) =>{
    // #removing from database
    this.setState(previousState =>{
      let stickies = previousState.stickies.filter(sticky => sticky.id !== id)
      return {stickies: stickies}
    })
  }

  eachSticky = (sticky) =>{
    // debugger
    return(
      <StickyList key={sticky.id} id={sticky.id} onSave={this.updateSticky} onSubmit={this.handleSubmit} onRemove={this.remove}>{sticky.sticky}</StickyList>
    )
  }



  renderEditSticky = (props) => {
    const id=0
    const sticky = this.state.stickies.find( s => s.id === parseInt(id) )
    if (!sticky) {
      return null
    }
    // return (<StickyForm sticky={sticky} createSticky={this.createSticky} onSubmit={this.updateSticky}/>)
  }


  render(){
    if (!this.props.board){
      return null
    }
    return (
      <div>
      <div>
      <h2>{this.props.board.title}</h2>

        {this.state.stickies.map(this.eachSticky)}
        <button onClick={this.add}>+</button>
      </div>

      <div className='row'>

        <div className='col-md-4'>
          <StickyList stickies={this.state.stickies} />
        </div>


        <div className='col-md-8'>
            { this.renderEditSticky() }
        </div>
      </div>
      </div>
    )
  }
}




// <StickyForm createSticky={this.createSticky} onSubmit={this.createSticky}/>
