import React, { Component } from 'react'

class Login extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit( this.state )
    this.setState({username: '', email: '', password: ''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input type='text' value={this.state.username} name="username" onChange={this.handleChange}/>
        <label>Email</label>
        <input type='email' value={this.state.email} name="email" onChange={this.handleChange}/>
        <label>Password</label>
        <input type='password' value={this.state.password} name="password" onChange={this.handleChange}/>
        <input type="submit" />
      </form>
    )
  }
}

export default Login
