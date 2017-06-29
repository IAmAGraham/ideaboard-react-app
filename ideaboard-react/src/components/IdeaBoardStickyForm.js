import React, { Component} from 'react';

export default class IdeaBoardStickyForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      x:[],
      y:[],
      content:''
    }
  }

  handleChange(event){
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
