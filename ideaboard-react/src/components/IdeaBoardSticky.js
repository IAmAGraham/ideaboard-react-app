import React, { Component} from 'react';
import '../postitnote.css';
import Draggable from 'react-draggable';

export default class IdeaBoardStickyForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false
      // x:[],
      // y:[],
      // content:''
    }
  }

  edit = () => {
    this.setState( {editing: true})
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
    return this.props.children !== nextProps.children || this.state !== nextState.children
  }

  save = (event) => {
    this.props.onSave(this.refs.newText.value, this.props.id)
    this.setState({editing : false})
  }

  randomBetween(x,y,s){
    return (x = Math.ceil(Math.random()*(y-x))) + s
  }

  remove = () =>{
    this.props.onRemove(this.props.id)
  }

  renderForm(){
    return(
      <div className="note" style={this.style}>
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    )
  }

  renderDisplay(){
    return(
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    )
  }

  render(){
    return (
      <div>
        <Draggable>
          {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
        </Draggable>
      </div>
    )
  }

  // handleChange(event){
  //   this.setState({
  //   [event.target.name]: event.target.value
  //   })
  // }
  //
  // handleSubmit(event){
  //   event.preventDefault()
  //   const xAndY = `${this.state.x}, ${this.state.y}`
  //   const content = `${this.state.content}`
  //   const xAndYAndContent = "xAndY" + " " + "content"
  //   this.props.onSubmit()
  //   this.setState({
  //     x: [],
  //     y: [],
  //     content: ''
  //   })
  // }

  // render(){
  //
  // }
}

//
// <Draggable>
// <div className="container bootstrap snippet">
//   <div className="row">
//     <ul className="notes">
//       <li key={this.props.board.id}>
//         <div className="rotate-1 lazur-bg">
//           <textarea>You can type in here</textarea>
//           <a href=`/boards/${this.props.board.id}` className="text-danger pull-right" onClick{ () => this.props.deleteSticky(this.props.board.id)}><i className="fa fa-trash-o "></i></a>
//         </div>
//       </li>
//     </ul>
//   </div>
// </div>
// </Draggable>
