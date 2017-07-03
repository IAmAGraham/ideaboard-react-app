import React, { Component } from 'react';
import '../postitnote.css'

import Sticky from './Sticky';

class Board extends Component {

  constructor(){
    super()
    this.state = {
      add: true,
      stickies:[]
    }
  }

  update = (newText, id) => {

    this.setState(pState=>{
      let stickies = pState.stickies.map( sticky =>(
        sticky.id !== id ? sticky :  {...sticky, sticky: newText  }
      ))
      return {
        stickies: stickies
      }
    })

  }

  add = () =>{

    this.setState(pState=>(
      {
        stickies: [  ...pState.stickies,{ id: this.nextId(), sticky: 'New Sticky'}]
      }
    ))

  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  remove = (id) =>{

    this.setState(pState=>{
      let stickies = pState.stickies.filter(sticky => sticky.id !== id)
      return { stickies: stickies }
    })

  }

  eachSticky = (sticky)=>{
    return(
      <Sticky
        key={sticky.id}
        id={sticky.id}
        onSave={this.update}
        onRemove={this.remove}
      >
        {sticky.sticky}
      </Sticky>
    )
  }

  render(){
    return(
      <div className ='board'>
        {this.state.stickies.map(this.eachSticky)}
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

export default Board;
