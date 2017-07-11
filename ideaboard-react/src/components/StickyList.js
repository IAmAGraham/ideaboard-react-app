 import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import StickyForm from './StickyForm';
// import NewStickyForm from './newstickyform'
// import StickyDetail from './StickyDetail'
import {StickiesAdapter} from '../adapters';


export default class StickyList extends Component{

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
  }

  // renderCreateSticky = (props) => {
  //   const id= 0
  //   const sticky = this.state.stickies.find( s => s.id === parseInt(id) )
  //   return (<StickyDetail stickies={this.state.stickies} createSticky={this.createSticky} sticky={sticky} deleteSticky={this.deleteSticky} />)
  // }

  componentDidMount(){
    return fetch('http://localhost:3000/api/v1/stickies')
      .then( res => res.json() )
      .then( data => this.setState({ stickies: data}) )
  }


  deleteSticky(id){

      StickiesAdapter.destroy(id)
      .then( () => {
          this.setState( previousState => {
            return {
              stickies: previousState.stickies.filter( sticky => sticky.id !== id )
            }
          })
        })
    }







  eachSticky = (sticky) =>{
    // debugger
    return(
      <StickyList key={sticky.id} id={sticky.id} onSave={this.updateSticky} onSubmit={this.handleSubmit} onRemove={this.remove}>{sticky.sticky}</StickyList>
    )
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

  render(){
    // debugger
    let list=[]
    for(var i =0 ;i<=this.state.maxSticky;i++){
           list.push(<div>{this.state.add>i&&
           <StickyForm deleteSticky={this.deleteSticky} stickies={this.state.stickies}/>}</div>)
         }
    return(
      <div>
      {list}
        <div className='col-md-8' onClick={this.add}>
          <button>+</button>
        </div>
      </div>
    )
  }
}




// {this.state.stickies.map(this.eachSticky)}

// return (<StickyForm sticky={sticky} createSticky={this.createSticky} onSubmit={this.updateSticky}/>)
