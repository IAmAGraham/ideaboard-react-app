import React, {Component} from 'react';
import {BoardsAdapter} from '../adapters';
import IdeaBoardPage from '../components/IdeaBoardPage';
import IdeaBoardDetail from '../components/IdeaBoardDetail'

// import withAuth from '..hocs/withAuth';

class IdeaBoardsPage {
    constructor() {
      super = {
        boards: []
      }
    }


  componentDidMount(){
    BoardsAdapter.all()
    .then( data => this.setState({ boards: data}) )
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

  deleteBoard(id){
    BoardsAdapter.destroy(id)
    .then( ()=> {
      this.setState( previousState => {
        return {
          boards: previousState.boards.filter( board => board.id !== id )
        }
      })
      this.props.history.push('/myideaboards')
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
      this.props.history.push(`/myideaboards/${board.id}`)
    })
  }

  render(){
    return <IdeaBoardsPage boards={this.state.board}
                          deleteBoard={this.deleteBoard}
                          updateBoard={this.updateBoard}
                          createBoard={this.createBoard} />
  }
}

// export default withAuth(IdeaBoardsPageContainer)
