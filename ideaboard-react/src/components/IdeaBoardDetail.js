import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StickyList from './StickyList'
// import StickyForm from './StickyForm'
import {StickiesAdapter, BoardsAdapter} from '../adapters';



export default class IdeaBoardDetail extends Component {
  constructor(){
    super();
    this.state = {
      // add: true,
      stickies: []
    }
    // this.createSticky = this.createSticky.bind(this)
    this.deleteSticky = this.deleteSticky.bind(this)
    this.updateSticky = this.updateSticky.bind(this)
    this.createSticky = this.createSticky.bind(this)
  }

  componentDidMount(){
    if (!!this.props.board) {
      BoardsAdapter.show(this.props.board)
      .then(res=>this.setState(
        {
          stickies: res.stickies
        }
      ))

    }
  }

  componentWillReceiveProps(nextProps, nextState){
    if (!!nextProps.board) {
      BoardsAdapter.show(nextProps.board)
      .then(res=>this.setState(
        {
          stickies: res.stickies
        }
      ))
    }
  }

  updateSticky(sticky){

    StickiesAdapter.updateStickies(sticky)
    .then(res=>{
      this.setState(pS=>{
        const newStickies = pS.stickies.filter(sticky => sticky.id !== res.id)
        return {
          stickies: [...newStickies, res]
        }
      })
    })
  }


  createSticky(newSticky){
    StickiesAdapter.addSticky(newSticky)
    .then(res=>{
      this.setState(pS=>{
        return {
          stickies: [...pS.stickies, res]
        }
      })
    })
  }

  deleteSticky(id){
      console.log(`Called destory`)
      console.log(`Adapter is:`)
      console.log(StickiesAdapter)
      console.log(this.state.stickies)


      StickiesAdapter.destroyStickies(id)
      .then(res =>{
        console.log('Did you see me???');
        let boardStickies = res
        //const deleteStick = this.state.stickies.filter( sticky => sticky.id !== res.id );
        this.setState(() => {
          return {
            stickies: boardStickies
          }
        })
      })
    }

  render(){
    if (!this.props.board){
      return null
    }
    return (
    <div>
      <div >
        <div className="flex-container">
          <div >
            <h2>{this.props.board.title}</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <StickyList createSticky={this.createSticky}
                      boardId={this.props.board.id}
                      stickies={this.state.stickies}
                      key={this.state.stickies.id}
                      onSubmit={this.updateSticky}
                      onDelete={this.deleteSticky}
                      />
        </div>
      </div>
    </div>
    )
  }
}

// {(!!this.state.stickies.length)
//   ? <StickyList createSticky={this.createSticky} boardId={this.props.board.id} stickies={this.state.stickies} key={this.state.stickies.id} onSubmit={this.updateSticky} onDelete={this.deleteSticky}/>
//   : null }
