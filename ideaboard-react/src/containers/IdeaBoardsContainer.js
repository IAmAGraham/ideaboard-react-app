import React, {Component} from 'react';
import {BoardsAdapter, StickiesAdapter} from '../adapters';
import IdeaBoardPage from '../components/IdeaBoardPage';
// import IdeaBoardDetail from '../components/IdeaBoardDetail'
import StickyList from '../components/StickyList'
import StickyForm from '../components/StickyForm'

// import withAuth from '..hocs/withAuth';

class IdeaBoardsPage {
    constructor() {
      super = {
        boards: [],
        stickies: []
      }
      this.createBoard = this.createBoard.bind(this)
      this.createSticky = this.createSticky.bind(this)
      this.deleteBoard = this.deleteBoard.bind(this)
      this.deleteSticky = this.deleteSticky.bind(this)
      this.updateBoard = this.updateBoard.bind(this)
      this.updateSticky = this.updateSticky.bind(this)
    }


  componentDidMount(){
    // if(!localStorage.getItem('jwt')){
    //   this.props.history.push('/login')
    // } else {
    BoardsAdapter.all()
    .then( data => this.setState({ boards: data}) )
    // }
  }

  createBoard(board){
    BoardsAdapter.create(board)
    .then(board => this.setState( (previousState) => {
      return {
        boards: [...previousState.boards, board]
      }
    })
    )
  }

  createSticky(sticky){
    StickiesAdapter.create(sticky)
    .then(sticky => this.setState( (previousState) => {
      return {
        stickies: [...previousState.stickies, sticky]
      }
    })
    )
  }

  deleteBoard(id){
    BoardsAdapter.destroy(id)
    .then( ()=> {
      this.setState( previousState => {
        return {
          boards: previousState.boards.filter( board => board.id !== id )
        }
      })
      this.props.history.push('/boards')
    })
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

  updateBoard(board){
    BoardsAdapter.update(board).then( () => {
      this.setState(function(previousState){
        return {
          boards: previousState.boards.map(function(b){
            if (b.id !== board.id) {
              return b
            } else {
              return board
            }
          })
        }
      })
      this.props.history.push(`/boards/${board.id}`)
    })
  }

  updateSticky(sticky){
    StickiesAdapter.update(sticky).then( () => {
      this.setState(function(previousState){
        return {
          stickies: previousState.stickies.map(function(s){
            if (s.id !== sticky.id) {
              return s
            } else {
              return sticky
            }
          })
        }
      })
      this.props.history.push(`/stickies/${sticky.id}`)
    })
  }

  render(){
    return (<IdeaBoardsPage boards={this.state.board}
                          deleteBoard={this.deleteBoard}
                          updateBoard={this.updateBoard}
                          createBoard={this.createBoard} />
      <StickyList stickies={this.state.sticky}
                  deleteSticky={this.deleteSticky}
                  updateSticky={this.updateSticky}
                  createSticky={this.createSticky} />
    )
  }
}

export default withAuth(IdeaBoardsPageContainer)
