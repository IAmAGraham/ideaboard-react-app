import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import '../postitnote.css'

export default class IdeaBoardItem extends Component{

    constructor(props){
      super(props);

      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderForm = this.renderForm.bind(this);
      this.renderStickyInput = this.renderStickyInput.bind(this);
      this.renderDisplay = this.renderDisplay.bind(this);
      this.renderStickyInput = this.renderStickyInput.bind(this);
      this.save = this.save.bind(this);
      this.state = {
        boards: [],
        editing: false,
        stickies: [{id: 1, content:'', x:'', y:''}]
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
        // debugger
        this.refs.newText

      }
    }

    shouldComponentUpdate(nextProps, nextState){
      return this.props.value !== nextProps.value || this.state !== nextState.value
    }

    save(event){
      event.preventDefault()
      const content = `${this.state.stickies[0].content}`

      this.props.onSave(content)
      this.setState({
        content: ''
      })
    }


    handleSave(event){
      event.preventDefault()
      // debugger
      if(this.state.content !== ""){
        this.props.on
      }
    }

    randomBetween(x,y,s){
      return (x + Math.ceil(Math.random()*(y-x))) +s
    }

    remove = () =>{
      this.props.onRemove(this.props.id)
    }

    handleSubmit(event){
      event.preventDefault()
      // debugger
      const content = `${this.state.stickies[0].content}`
      this.props.onSave(content)
      this.setState({
        content: ''
      })
    }

    handleTextChange(id, content){
      this.setState((previousState) => {
        return {
          stickies: previousState.stickies.map((stick) => {
            if (stick.id !== id) {
              return stick
            } else {
              return {id: id, content: content}
            }
          })
        }
      })
    }


    renderForm(){
      return (
      <div className="container bootstrap snippet">
        <div className="row">
          <ul className="notes">
          <li>
            <div className="rotate-1 lazur-bg">
            {this.renderStickyInput()}
            </div>
          </li>
          </ul>
        </div>
      </div>
    )}

    renderStickyInput(){
      return this.state.stickies.map( stick => (
        <form onSubmit={this.handleSubmit}>
        <div>
          <textarea key={stick.id} type='text' id={stick.id} placeholder="Add Sticky Stuff" defaultValue={stick.content} onChange={(event) => this.handleTextChange(stick.id, event.target.value)} />
          <button onClick={this.save}>Save</button>
        </div>
        </form>
      ))
    }

    renderDisplay(){
      return(
      <div className="container bootstrap snippet" style={this.style}>
        <div className="row">
          <ul className="notes">
          <li>
            <div className="rotate-1 lazur-bg">
              <button onClick={this.remove}>X</button>
              <button onClick={this.edit}>Edit</button>
            </div>
            </li>
          </ul>
        </div>
      </div>
    )}


    render(){
      return(
        <div>
        <Draggable>
          {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
        </Draggable>
        </div>
      )
    }
}
