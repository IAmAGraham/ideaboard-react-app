import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import IdeaBoardItem from './IdeaBoardItem'

export default class IdeaBoardDetail extends Component {
  constructor(){
    super();
    this.state = {
      add: true,
      stickies: []
    }
  }

  update = (newText, id) => {
    this.setState(previousState => {
      let stickies = previousState.stickies.map( sticky =>(
        sticky.id !== id ? sticky : {...sticky, sticky: newText }
      ))
      return {
        stickies: stickies
      }
    })
  }

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
    this.setState(previousState =>{
      let stickies = previousState.stickies.filter(sticky => sticky.id !== id)
      return {stickies: stickies}
    })
  }

  eachSticky = (sticky) =>{
    return(
      <IdeaBoardItem key={sticky.id} id={sticky.id} onSave={this.update} onSubmit={this.submit} onRemove={this.remove}>{sticky.sticky}</IdeaBoardItem>
    )
  }

  render(){
    if (!this.props.board){
      return null
    }

    return (
      <div>
      <h2>{this.props.board.title}</h2>

        {this.state.stickies.map(this.eachSticky)}
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}
