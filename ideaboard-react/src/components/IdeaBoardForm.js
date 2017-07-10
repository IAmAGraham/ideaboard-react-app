import React, { Component} from 'react';

export default class IdeaBoardForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const titleAndDesrip = `${this.state.title}`
    debugger
    this.props.onSubmit(titleAndDesrip)
    this.setState({
      title: '',
      description: ''
    })
  }

  render(){
    console.log("Dis is dat idea form")
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type='text' placeholder='Title of Project' name="title" value={this.state.title} onChange={this.handleChange}/>
      <input type='text' placeholder='Description of Project' name="description" value={this.state.description} onChange={this.handleChange}/>
      <input type='submit' value='Add A Board' />
      </form>
      </div>
    )
  }
}
