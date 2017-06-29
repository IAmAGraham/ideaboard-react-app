import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import IdeaBoardItem from './IdeaBoardItem'

export default class IdeaBoardDetail extends Component {
  constructor(props){
    super(props)
  }

  render(){
    if (!this.props.board){
      return null
    }

    return (
      <div>
      <h2>{this.props.board.title}</h2>
      <IdeaBoardItem onSubmit={this.createSticky}/>
      </div>
      <div>

      </div>
    )

  }
}
