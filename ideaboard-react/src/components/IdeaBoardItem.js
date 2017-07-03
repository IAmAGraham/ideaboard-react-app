import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import IdeaBoardSticky from './IdeaBoardSticky';

import '../postitnote.css'

export default class IdeaBoardItem extends Component{

  constructor(props){
    super(props)
    this.state = {
      add: true,
      stickies: []
    }
  }

  update = (newText, id) => {
    this.setState(previousState => {
      let stickies = previousState.stickies.map( sticky => (
        sticky.id !== id ? sticky : {...sticky, sticky: newText}
      ))
      return {
        stickies: stickies
      }
    })
  }

  add = () => {
    this.setState(previousState => (
      { stickies: [...previousState.stickies, { id: this.nextID(), sticky: "New Sticky"}]
      }
    ))
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  remove = (id) => {
    this.setState(previousState => {
      let stickies = previousState.stickies.filer( sticky => sticky.id !== id)
      return {stickies: stickies}
    })
  }

  eachSticky = (sticky) => {
    return(
      <IdeaBoardSticky key={sticky.id} id={sticky.id} onSave={this.update} onRemove={this.remove}>{sticky.sticky}</IdeaBoardSticky>
    )
  }

  render(){
    return(
      <div>
        {this.state.stickies.map(this.eachSticky)}
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}
