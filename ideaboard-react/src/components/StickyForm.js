import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import '../postitnote.css';
import {StickiesAdapter} from '../adapters'

class MyDraggableItem extends Draggable {
  constructor(props) {
    super(props)
  }
}


export default class StickyForm extends Component{

    constructor(props){
      super(props);

      this.handleStickyChange = this.handleStickyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderForm = this.renderForm.bind(this);
      this.renderDisplay = this.renderDisplay.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.changeToEdit = this.changeToEdit.bind(this);
      this.constructSticky = this.constructSticky.bind(this);
      this.constructStickyLocation = this.constructStickyLocation.bind(this);
      // this.handleDrag = this.handleDrag.bind(this)
      this.handleStop = this.handleStop.bind(this)
      this.state = {

        editing: false,
        content:""

      }
    }

    handleStickyChange(event){
      console.log(event.target.value)
      const value = event.target.value
      this.setState({content: value})

    }

    handleSubmit(event){
      event.preventDefault()
      const content = this.state.content
      const id = this.props.sticky.id
      const x = this.props.sticky.x
      const y = this.props.sticky.y
      this.props.onSubmit(this.constructSticky(x,y))
      this.setState({
        editing: false,
      })
    }

    handleStop(event){
      console.log("stopped")
      console.log(this.props.sticky.x, this.props.sticky.y)
      // event.preventDefault()
      // const x = this.props.sticky.x
      // const y = this.props.sticky.y
      // this.props.onStop(this.constructStickyLocation(x, y))
      //
      // this.setState({ x: event.target.value, y:event.target.name })
      // call this with x and y of the sticky from the Draggable drop
      // this.props.onSubmit(this.constructSticky(x,y))
    }

    // handleDrag(event){
    //   event.preventDefault()
    //   const x = this.props.sticky.x
    //   const y = this.props.sticky.y
    //   this.props.onDrag(this.constructStickyLocation(x, y))
    //
    //   this.setState({ x: event.target.value, y: event.target.name })
    // }

    handleDelete(event){
      event.preventDefault()
      const sticky= this.props.sticky
      this.props.deleteSticky(event.target.value)
    }

    constructSticky(x,y){
      return(
        {
          id: this.props.sticky.id,
          content: this.state.content,
          x: x,
          y: y
        }
      )
    }

    constructStickyLocation(x,y){
      return(
        {
          id: this.props.sticky.id,
          content: this.state.content,
          x: this.props.sticky.x,
          y: this.props.sticky.y
        }
      )
    }


    changeToEdit(props){
      this.setState({editing: true})
    }

    renderForm(){
      // debugger
      return (
      <div >
        <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Add Sticky Content Here' name='content' value={this.state.content} onChange={this.handleStickyChange} />
        <input type='submit' value="save" />
        </form>
      </div>
    )}

    renderDisplay(){
      // debugger
      return(
      <div >
        <button onClick={this.handleDelete} value={this.props.sticky.id} className="btn btn-danger">X</button>
        <button onClick={this.changeToEdit}>Edit</button>
        <p>{this.props.sticky.content}</p>
      </div>
    )}

    render(){

      // for Draggable have a callback that gets excecuted once the sticky is dropped
      // that call back will excecute like the edit and handlesubmit, the only difference is that you are getting
      // the x and y from the event
      // on componentDidMount use the x and y from the props to set the style
      // set it like this: this.style = {
      //   right: ... ,
      //   top: ...
      // }
        return(

          <div className="container bootstrap snippet">
            <div className="row">
              <MyDraggableItem onStop={this.handleStop} onDrag={this.handleDrag} value={this.props.sticky.x} name={this.props.sticky.y}>
                <div className="sticky">
                  <div className="rotate-1 lazur-bg">
                {(this.state.editing === true) ? this.renderForm() : this.renderDisplay()}
                  </div>
                </div>
              </MyDraggableItem>
            </div>
          </div>

        )
      }

  }
