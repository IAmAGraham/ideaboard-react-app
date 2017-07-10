import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';


import '../postitnote.css'

export default class StickyDetail extends Component{

    constructor(props){
      super(props);

      // this.handleStickyChange = this.handleStickyChange.bind(this);
      // this.handleTextChange = this.handleTextChange.bind(this);
      // this.handleSave = this.handleSave.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
      this.renderTextInput = this.renderTextInput.bind(this);
      // this.renderForm = this.renderForm.bind(this);
      // this.renderStickyInput = this.renderStickyInput.bind(this);
      // this.renderDisplay = this.renderDisplay.bind(this);
      // this.removeSticky = this.removeSticky.bind(this);
      // this.editSticky = this.editSticky.bind(this);
      // this.save = this.save.bind(this);
      this.state = {

        editing: false,
        activeSticky:{id:1}
      }
    }

    // handleStickyChange(event){
    //   console.log(event.target.value)
    //   this.setState({
    //     activeSticky: Object.assign({}, {content: event.target.value, id:1})
    //   })
    // }

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

    componentWillReceiveProps(nextProps){

      if (nextProps !== this.props) {
        const content = nextProps.stickies.content
        this.setState({
          content: content
        })
      }
    }

    // handleSubmit(event){
    //   event.preventDefault();
    //   console.log("here!")
    //   debugger
    //     // this.setState({activeSticky: Object.assign({}, {content: event.target.value})
    //     //
    //     // this.state.stickies.map( x => {
    //     //   if (x.id === this.state.activeSticky.id){
    //     //     return Object.assign({}, {content: this.state.activeSticky.content}
    //     //     )} else {
    //     //       return x
    //     //     }
    //     //   })
    //
    //
    // }
    //
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




    renderTextInput(){
      this.setState(function(previousState){
        return { stickies: [...previousState.stickies, {id: previousState.stickies.length+1, content:''}]}
      })
    }

    // removeSticky = () =>{
    //
    //   this.props.onRemove(this.props.id)
    // }
    //
    // editSticky = () =>{
    //
    //   this.setState({editing: true})
    // }

    // renderForm(){
    //   return (
    //   <div>
    //     <form >
    //     <input type='text' placeholder='Add Sticky Content Here' name='content' value={this.state.content} onChange={this.handleStickyChange} />
    //     <input type='submit' value={this.props.submitText} onSubmit={this.handleSubmit}/>
    //     </form>
    //   </div>
    // )}

    //
    // renderDisplay(){
    //   return(
    //   <div>
    //     <button onClick={this.removeSticky}>X</button>
    //     <button onClick={this.editSticky}>Edit</button>
    //
    //   </div>
    // )}

    render(){
      return (<p>Hi</p>)
    }

}
