import axios from 'axios';
import {IdeaBoardApi} from '..components/constants'

export function createBoard(token, board){
  return (dispatch) => {
    axios
    .post(`${IdeaBoardApi}/boards`, board, {
      headers:
      {token: token}
    })
    .then( ({data}) => {
      dispatch({
        type: "ADD_BOARD"
        data: data
      })
    })
    .catch( (errors) => {
      console.log(errors)
    })
  }
}

export const deleteBoard = (token, payload) => {
  return (dispatch) => {
    axios
      .delete(`${IdeaBoardApi}/boards/${payload.id}`, {
        headers:
        {token: token}
      })
      .then( ({data}) => {
        dispatch({
          type: 'DELETE_BOARD',
          payload: data
        })
      }).catch( (errors) => {
        dispatch({
          type: "ADD_ERROR",
          payload: "Issue deleting board"
        })
        setTimeout( () => {dipatch({
          type: "ADD_ERROR",
          payload: ""
        })}, 2000)
      })
  }
}

export const updateBoard = (token, payload) => {
  return (dispatch) => {
    axios
    .patch(`${IdeaBoardApi}/boards/${payload.board.id}`, payload, {
      headers:
      {token: token}
    })
    .then( ({data}) => {
      dispatch({
        type: "ADD_ERROR",
        payload: "Saved Board"
      })
      setTimeout( () => {dispatch ({
        type: "ADD_ERROR"
        payload: ""
      })}, 2000)
      dispatch({
        type: "SET_CURRENT_BOARD",
        data: data
      })
    }).catch( (errors) => {
      dispatch({
        type: "ADD_ERROR",
        payload: errors.response.data.error
      })
      setTimeout( () => {dispatch({
        type: "ADD_ERROR",
        payload: ""
      })}, 2000)
    })
  }
}

export const setCurrentBoard = (token, id) => {
  return (dispatch) => {
    axios
      .get(`${IdeaBoardApi}/boards/${id}`, {
        headers:
        {token: token}
      })
      .then( ({data}) => {
        dispatch({
          type: "SET_CURRENT_BOARD",
          data: data
        })
      })
      .catch( (errors) => {
        dispatch ({
          type: "ADD_ERROR",
          payload: "Unable to access board"
        })
        setTimeout( () => {dispatch({
          type: "ADD_ERROR",
          payload: ""
        })}, 2000)
      })
  }
}

export const addError = (error) => {
  return {
    type: "ADD_ERROR",
    payload: error
  }
}

export const newBoard = () => {
  return {
    type: "NEW_BOARD"
  }
}

export function addCollaborator(token, payload){
  return (dispatch) => {
    axios
    .post(`${IdeaBoardApi}/boards/${payload.id}`, payload, {
      headers:
      {token: token}
    })
    .then( ({data}) => {
      dispatch({
        type: "ADD_ERROR",
        payload: "Added Collaborator"
      })
      setTimeout( () =>{dispatch({
        type: "ADD_ERROR",
        payload: ""
      })}, 2000)
      dispatch({
        type: "SET_CURRENT_BOARD",
        data: data
      })
    }).catch( (errors) => {

    })
  }
}

export function publish(token, {board}){
  return (dispatch) => {
    axios
    .patch(`${IdeaBoardApi}/boards/${board.id}/publish`, board, {
      headers:
      {token: token}
    })
    .then( ({data}) => {
      dispatch({
        type: "SET_CURRENT_BOARD",
        data: data
      })
    }).catch( (errors) => {

    })
  }
}

export const addBoardItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item
  }
}

export const updateItem = (payload) => {
  return {
    type: "UPDATE_ITEM",
    payload: payload
  }
}

export function deleteItem(IID){
  return {
    type: "DELETE_ITEM"
    payload: IID
  }
}

export const updateTitle = {title} => {
  return {
    type: "UPDATE_TITLE",
    payload: title
  }
}

export const updateDescription = {description} => {
  return {
  type: "UPDATE_DESCRIPTION"
  payload: description
  }
}
// Login stuff to go here






// export default class BoardsAdapter {
//   static allBoards(){
//     return fetch(`${this.url()}`, {
//       headers: headers()
//     })
//     .then( response => response.json() )
//   }
//
//   static url(){
//     return `${baseUrl}/allideaboards`
//   }
//
//   static createBoard(token, board){
//     return fetch(`${this.url()}`,
//     {method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({
//       board: {title: board.title, description: board.description}
//       })
//     })
//     .then( response => response.json() )
//   }
//
//   static update(board){
//    return fetch(`${this.url()}/${board.id}`, {
//     method: 'PATCH',
//     headers: headers(),
//     body: JSON.stringify({
//       board: {title: board.title, description: board.description}
//     })
//   })
// }
//
// static destroy(id){
//   return fetch(`${this.url()}/${id}`, {
//     method: 'DELETE',
//     headers: headers(),
//   })
// }
//
// }
