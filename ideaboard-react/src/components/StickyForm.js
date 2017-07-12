import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import '../postitnote.css';
// import {StickiesAdapter} from
// import MyDraggableItem from './MyDraggableItem';


export default class StickyForm extends Component{

    constructor(props){
      super(props);

      this.handleStickyChange = this.handleStickyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderForm = this.renderForm.bind(this);
      this.renderDisplay = this.renderDisplay.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.editSticky = this.editSticky.bind(this);

      this.state = {

        editing: false,
        activeSticky:{id:null, content:'', x: -372, y:32, board_id:null}

      }
    }

    handleStickyChange(event){
      console.log(event.target.value)
      this.setState({
        activeSticky: Object.assign({}, {content: event.target.value, id: null, x: null, y:null, board_id:null}, console.log(this.state.activeSticky))
      })

    }

    createStickies(sticky){
      return fetch(`http://localhost:3000/api/v1/stickies`,
      {method: 'POST',
      headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          // 'Authorization': localStorage.getItem('jwt')
        },
      body: JSON.stringify({
        sticky: {id: sticky.id, content: sticky.content, x: sticky.x, y: sticky.y, board_id: sticky.board_id}
        })
      })
      .then( response => response.json() )
      .then( data => {
        this.setState({
          activeSticky: Object.assign({}, {content: data.content, id: data.id}, console.log(this.state.activeSticky))
        })
      } )
      .then(sticky => {console.log(sticky);console.log(this)})
    }

    destroyStickies(id){
      return fetch(`http://localhost:3000/api/v1/stickies/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            // 'Authorization': localStorage.getItem('jwt')
          },
      })
    }




    handleSubmit(event){
      const content = `${this.state.activeSticky.content}`
      this.setState({
        content: '',
        editing: false
      })
      this.createStickies(this.state.activeSticky)
      }

      handleDelete(event){

      }


    editSticky = (props) =>{
      this.setState({editing: true})
    }

    renderForm(){
      // debugger
      return (
      <div >
        <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Add Sticky Content Here' name='content' value={this.state.content} onChange={this.handleStickyChange} />
        <input type='submit' value={this.props.submitText} />
        </form>
      </div>
    )}

    renderDisplay(){
      // debugger
      return(
      <div >

        <button onClick={() => this.props.deleteSticky(this.state.activeSticky.id) } className="btn btn-danger">X</button>
        <button onClick={this.editSticky}>Edit</button>
        <p>{this.state.activeSticky.content}</p>
      </div>
    )}

    render(){
      if (this.state.activeSticky === undefined){
          return (<div>Nothing</div>)
      }else {
        return(

          <div className="container bootstrap snippet">
          <div className="row">
          <Draggable>
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
  }
