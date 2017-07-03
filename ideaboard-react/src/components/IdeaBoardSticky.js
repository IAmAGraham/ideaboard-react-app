import React, { Component} from 'react';
import Draggable from 'react-draggable';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

export default class IdeaBoardStickyForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      x:[],
      y:[],
      content:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
    [event.target.name]: event.target.value
    })
  }


  handleStop(event){
  this.setState({
    [event.target.name]: event.target.value
  })
}


  handleSubmit(event){
    event.preventDefault()
    const xAndY = `${this.state.x}, ${this.state.y}`
    const content = `${this.state.content}`
    const xAndYAndContent = "xAndY" + " " + "content"
    this.props.onSubmit()
    this.setState({
      x: [],
      y: [],
      content: ''
    })
  }

  render(){

  }
}
