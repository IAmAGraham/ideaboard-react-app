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
    this.deleteSticky = this.deleteSticky.bind(this)
    this.renderAddButton = this.renderAddButton.bind(this)
  }


  componentDidMount(){
    return fetch('http://localhost:3000/api/v1/stickies')
      .then( res => res.json() )
      .then( data => this.setState({ stickies: data}) )
  }


  deleteSticky(id){
      console.log(`Called destory`)
      console.log(`Adapter is:`)
      console.log(StickiesAdapter)
      console.log(this.state.stickies)

      let currentState = this.state.stickies
      StickiesAdapter.destroyStickies(id)
      this.setState( currentState => {
        // debugger
        return {
          stickies: currentState.stickies.filter( sticky => sticky.id !== id )
        }
      })

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

add(){
    this.setState((previousState)=>({
        add: ++previousState.add
    })
  )}

  renderAddButton(){

  }

  render(){
    // debugger
    let stickies=this.state.stickies.map( sticky => <ul><li>{sticky.content}</li></ul>  )
      let list = []
      for(var i =0 ;i<=this.state.maxSticky;i++){
             list.push(<div>{this.state.add>i&&
             <StickyForm deleteSticky={this.deleteSticky} stickies={this.state.stickies}/>}</div>)
           }
      return(
      <div className='col-md-8' onClick={this.add}>
      <button>+</button>
        {list}
      </div>
    )
  }
}

export default withRouter(StickyList)


// {this.state.stickies.map(this.eachSticky)}

// return (<StickyForm sticky={sticky} createSticky={this.createSticky} onSubmit={this.updateSticky}/>)
