import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';


import '../postitnote.css'

export default class StickyForm extends Component{

    constructor(props){
      super(props);

      this.handleStickyChange = this.handleStickyChange.bind(this);
      // this.handleTextChange = this.handleTextChange.bind(this);
      // this.handleSave = this.handleSave.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.renderTextInput = this.renderTextInput.bind(this);
      this.renderForm = this.renderForm.bind(this);
      // this.renderStickyInput = this.renderStickyInput.bind(this);
      this.renderDisplay = this.renderDisplay.bind(this);
      this.removeSticky = this.removeSticky.bind(this);
      this.editSticky = this.editSticky.bind(this);
      // this.save = this.save.bind(this);
      this.state = {

        editing: false,
        activeSticky:{id:1, content:''}
      }
    }

    handleStickyChange(event){
      console.log(event.target.value)
      this.setState({
        activeSticky: Object.assign({}, {content: event.target.value, id:1})
      })
    }

    // renderCreateSticky = (props) => {
    //   const id= 0
    //   const sticky = this.state.stickies.find( s => s.id === parseInt(id) )
    // }
    // return (<StickyDetail stickies={this.state.stickies} createSticky={this.createSticky} sticky={sticky} deleteSticky={this.deleteSticky} />)

    //
    // handleTextChange(id, content){
    //
    //   this.setState( (previousState) => {
    //     return {
    //       stickies: previousState.stickies.map( (stick) =>{
    //         if (stick.id !== parseInt(id)){
    //           return stick
    //         } else {
    //           return {
    //             id: id,
    //             content: content
    //           }
    //         }
    //       })
    //     }
    //   }, console.log(this.state.stickies))
    // }

    // componentWillReceiveProps(nextProps){
    //   // if (nextProps !== this.props) {
    //   //   const content = nextProps.stickies.content
    //   //   this.setState({
    //   //     content: content
    //   //   })
    //   // }
    // }

    handleSubmit(event){
      event.preventDefault();
      const content = `${this.state.activeSticky.content}`
      this.props.onSubmit(content)
      this.setState({
        content: '',
        editing: false
      })
    }



        // this.state.stickies.map( x => {
        //   if (x.id === this.state.activeSticky.id){
        //     return Object.assign({}, {content: this.state.activeSticky.content}
        //     )} else {
        //       return x
        //     }
        //   })



    // stickySubmit(id, content){
    //   debugger
    // }

    // handleSubmit(event){
    //   event.preventDefault()
    //   const content = `${this.state.stickies[0].content}`
    //   if(this.state.stickies[0] !== ""){
    //     this.props.onSubmit(content)
    //   } else {
    //     alert('Please enter content for this sticky')
    //   }
    //
      // debugger
    //




    // renderTextInput(){
    //   this.setState(function(previousState){
    //     return { stickies: [...previousState.stickies, {id: previousState.stickies.length+1, content:''}]}
    //   })
    // }
    //
    handleSubmit(event){
      event.preventDefault();
      const content = `${this.state.activeSticky.content}`
      this.props.onSubmit(content)
      this.setState({
        content: '',
        editing: false
      })
    }


    // removeSticky(event){
    //   event.preventDefault();
    //   const id =`${this.state.activeSticky.id}`
    //   this.props.onDelete(id)
    //   this.setState({
    //     id: ''
    //   })
    // }


    removeSticky = ()=>{
        this.props.onDelete(this.state.activeSticky.id)
      }

    editSticky = (props) =>{
      this.setState({editing: true})
    }

    renderForm(){
      debugger
      return (
      <div >
        <form onSubmit={this.handleSubmit}>
        <input key={this.state.content.id + ` content`} type='text' placeholder='Add Sticky Content Here' name='content' value={this.state.content} onChange={this.handleStickyChange} />
        <input type='submit' value={this.props.submitText} />
        </form>
      </div>
    )}


    renderDisplay(){
      return(
      <div >
        <button onClick={this.removeSticky} className="btn btn-danger">X</button>
        <button onClick={this.editSticky}>Edit</button>
        <p>{this.state.activeSticky.content}</p>
      </div>
    )}

    render(){
      return(
        <div className="container bootstrap snippet">
          <div className="row">
          <Draggable>
          <div className="sticky">

                <div className="rotate-1 lazur-bg">
                  {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
                </div>

          </div>
            </Draggable>
          </div>
        </div>
      )
    }


  }
