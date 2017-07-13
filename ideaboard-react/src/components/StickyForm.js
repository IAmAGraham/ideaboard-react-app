import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import '../postitnote.css';
import {StickiesAdapter} from '../adapters'
// import MyDraggableItem from './MyDraggableItem';


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

      this.state = {

        editing: false,
        content:""
        // activeSticky:{id:null, content:'', x: -372, y:32, board_id:null}

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

      // const board_id = `${this.props.sticky.board_id}`
      this.props.onSubmit(this.constructSticky(x,y))
      this.setState({
        editing: false,
      })
      // this.updateStickies(this.state.activeSticky)

    }

    handleDrop(event){
      // call this with x and y of the sticky from the Draggable drop
      // this.props.onSubmit(this.constructSticky(x,y))
    }

    handleDelete(event){

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

        <button onClick={() => this.props.deleteStickies(this.props.sticky.id) } className="btn btn-danger">X</button>
        <button onClick={this.changeToEdit}>Edit</button>
        <p>{this.props.sticky.content}</p>
      </div>
    )}

    render(){
      // debugger
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

              <Draggable onDrop={this.handleDrop}>
                <div className="sticky">
                  <div className="rotate-1 lazur-bg">
                {(this.state.editing === true) ? this.renderForm() : this.renderDisplay()}
                  </div>
                </div>
              </Draggable>
            </div>
          </div>

        )
      }

  }
