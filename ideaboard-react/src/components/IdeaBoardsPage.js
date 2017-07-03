import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IdeaBoardReactApp} from '.constants.js'
import {push} from "react-router-redux";
import {changeBoardAttributes, publish, addBoardItem, updateItem, createBoard, deleteItem, updateBoard, updateTitle, updateDescription, deleteBoard, setCurrentBoard, newBoard} from '../actions';

import Collaborator from './Collaborator';
import IdeaBoardForm from './IdeaBoardForm';
import IdeaBoardsList from './IdeaBoardsList';
import IdeaBoardDetail from './IdeaBoardDetail';
import IdeaBoardSticky from './IdeaBoardSticky';


class IdeaBoardsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      decrioption: ''
    }
    this.createBoard = this.createBoard.bind(this)
    this.addSticky = this.addSticky.bind(this)
  }

  componentWillMount(){
    let {board_id} = this.props.match.params
    if (board_id){
      this.props.setCurrentBoard(this.props.token, board_id)
    }
  }

  componentWillReceiveProps(nextProps){
    let {board_id} = nextProps.match.params
    if (nextProps.token){

      if (nextProps.board_id){

      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/boards')
      .then( res => res.json() )
      .then( data => this.setState({ boards: data}) )
  }

  createBoard(title){
    fetch('http://localhost:3000/api/v1/boards', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        board: {title: title}
      })
    }).then(response => response.json() )
      .then(board => this.setState( (previousState) => {
        return {
          boards: [...previousState.boards, board]
        }
      })
    )
  }

  deleteBoard(id){
    BoardsAdapter.destroy(id)
    .then( () => {
      this.setState( previousState => {
        return {
          boards: previousState.boards.filter( board => board.id !== id)
        }
      })
    })
  }

  deleteSticky(id){
    BoardsAdapter.destroy(id)
    .then( () => {
      this.setState( previousState => {
        return {
          baords: previousState.board.filter( board => board.id !== id)
        }
      })
    })
  }

  addSticky(event){
    if(event.target.className === 'board-container'){
      this.props.addBoardItem({
        x: event.clientX,
        y: event.clientY,
        content: '',
        IID: this.props.boardItems.length
      })
    }
  }


  render(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          <IdeaBoardsList boards={this.state.boards} />
        </div>
        <div className='col-md-8'>
        <Switch>
          <Route path='/boards/new' render={ () => <IdeaBoardForm onSubmit={this.createBoard}/>} />
          <Route path='/boards/:id' render={ (routerProps) => {
            const id= routerProps.match.params.id
            const board = this.state.boards.find( b => b.id === parseInt(id) )
            return <IdeaBoardDetail board={board} />
          }} />
          </Switch>
        </div>
      </div>
    )
  }
}
