import React, {Component} from 'react';
import '../postitnote.css'

import Draggable from 'react-draggable';

class Sticky extends Component {
  constructor(){
    super()
    this.state = {
      editing: false
    }
  }

  edit = () =>{
    this.setState({editing: true})
  }

  componentWillMount(){
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px')
    }
  }

  componentDidUpdate(){
    if (this.state.editing) {
      this.refs.newText.focus()
      this.refs.newText.select()
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props.children !== nextProps.children ||
            this.state !== nextState.children
  }

  save = (e)=> {
    this.props.onSave(this.refs.newText.value, this.props.id)
    this.setState({editing : false })
  }

  randomBetween(x,y,s){
    return (x+Math.ceil(Math.random()*(y-x))) + s
  }

  remove = ()=>{
    this.props.onRemove(this.props.id)
  }

  renderForm(){
    return(
      <div className="sticky" style={this.style}>
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save}>SAVE</button>
      </div>
    )
  }

  renderDisplay(){
    return (
      <div className="sticky" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>EDIT</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    )
  }

  render(){
     return (
       <div>
         <Draggable >
           {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
         </Draggable>
       </div>
     )
  }


}


export default Sticky;
