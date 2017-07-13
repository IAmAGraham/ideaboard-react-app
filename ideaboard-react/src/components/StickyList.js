 import React, {Component} from 'react';
import {Switch, withRouter} from 'react-router-dom';
import StickyForm from './StickyForm';
// import NewStickyForm from './newstickyform'
// import StickyDetail from './StickyDetail'
import {StickiesAdapter} from '../adapters';
import Draggable from 'react-draggable';
import '../postitnote.css';


class StickyList extends Component{

  constructor(props){
    super(props)
    this.state={
      stickies: [],
      add: 0,
      maxSticky: 100
    }

    this.add = this.add.bind(this);
    this.createSticky = this.createSticky.bind(this)
    this.stickyBluePrint = this.stickyBluePrint.bind(this)
  }


  componentDidMount(){
    return fetch('http://localhost:3000/api/v1/stickies')
      .then( res => res.json() )
      .then( data => this.setState({ stickies: data}) )
  }



  remove = (id) =>{
    // #removing from database
    this.setState(previousState =>{
      let stickies = previousState.stickies.filter(sticky => sticky.id !== id)
      return {stickies: stickies}
    })
  }

  renderEditSticky = (props) => {
    const id=0
    const sticky = this.state.stickies.find( s => s.id === parseInt(id) )
    if (!sticky) {
      return null
    }
  }

  stickyBluePrint(){
    return (
      { content: "",
        x: this.randomBetween(0, window.innerWidth - 150),
        y: this.randomBetween(0, window.innerHeight - 150),
        board_id: this.props.boardId
      }
    )
  }

  randomBetween(x,y){
    return (x+Math.ceil(Math.random()*(y-x)))
  }

  add(event){
    const newSticky = this.stickyBluePrint()
    this.props.createSticky(newSticky)
    // this.setState((previousState)=>({
    //     add: ++previousState.add
    // })
  }

  createSticky(sticky){
    return(
      <div>
        <StickyForm
          key = {sticky.id}
          onSubmit={this.props.onSubmit}
          deleteSticky={this.props.onDelete}
          sticky={sticky}
          // onDrag={this.componentDidMount}
          onStop={this.props.onStop}
        />
      </div>
    )
  }


  render(){
      return(
      <div className='col-md-8'>
        <button className="btn btn-success" onClick={this.add}>+</button>
          <div>
            {this.props.stickies.map(sticky => this.createSticky(sticky))}
          </div>
      </div>
    )
  }
}

export default withRouter(StickyList)
