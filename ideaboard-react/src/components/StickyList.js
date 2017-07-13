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
    // this.createSticky = this.createSticky.bind(this)
    // this.add = this.add.bind(this)
    // this.deleteSticky = this.deleteSticky.bind(this)

    this.createSticky = this.createSticky.bind(this)
    this.stickyBluePrint = this.stickyBluePrint.bind(this)
    // this.renderAddButton = this.renderAddButton.bind(this)
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
        <li>
          <StickyForm
            key = {sticky.id}
            onSubmit={this.props.onSubmit}
            deleteSticky={this.props.onDelete}
            sticky={sticky}
          />
        </li>
    )
  }


  render(){


      // let list = []
      // for(var i =0 ;i<=this.state.maxSticky;i++){
      //        list.push(<div>{this.state.add>i&&
      //        <StickyForm deleteSticky={this.deleteSticky} stickies={this.state.stickies}/>}</div>)
      //      }
      return(


      <div className='col-md-8'>
      <button onClick={this.add} >+</button>
      <ul>
        {this.props.stickies.map(this.createSticky)}
      </ul>
      </div>
    )
  }
}

export default withRouter(StickyList)


// {this.state.stickies.map(this.eachSticky)}

// return (<StickyForm sticky={sticky} createSticky={this.createSticky} onSubmit={this.updateSticky}/>)
