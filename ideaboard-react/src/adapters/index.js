const baseUrl = `http://localhost:3000/api/v1`

export class BoardsAdapter {
  static allBoards(){
    return fetch(`${this.baseUrl()}/boards`)
    .then( response => response.json() )
  }


  static create(board){
    return fetch(`${this.baseUrl()}/boards`,
    {method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
    body: JSON.stringify({
      board: {title: board.title, description: board.description, stickies: board.stickies}
      })
    })
    .then( response => response.json() )
  }

  static update(board){
   return fetch(`${this.baseUrl()}/boards/${board.id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
    body: JSON.stringify({
      board: {title: board.title, description: board.description, stickies: board.stickies}
    })
  })
}

static destroy(id){
  return fetch(`${this.baseUrl()}/boards/${id}`, {
    method: 'DELETE',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
  })
}
}

export class StickiesAdapter {

  static allStickies(){
    return fetch(`${this.baseUrl()}/stickies`)
    .then( response => response.json() )
  }

  static destroyStickies(id){
    return fetch(`${this.baseUrl()}/stickies/${id}`, {
      method: 'DELETE',
      headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'Authorization': localStorage.getItem('jwt')
        },
    })
  }

  static updateStickies(sticky){
   return fetch(`${this.baseUrl()}/stickies/${sticky.id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
    body: JSON.stringify({
      sticky: {id: sticky.id, content: sticky.content, x: sticky.x, y: sticky.y, board_id: sticky.board_id}
    })
  })
}

static createSticky(sticky){
  return fetch(`${this.baseUrl()}/stickies/${sticky.id}`,
  {method: 'POST',
  headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
  body: JSON.stringify({
    sticky: {id: sticky.id, content: sticky.content, x: sticky.x, y: sticky.y, board_id: sticky.board_id}
    })
  })
  .then( response => response.json() )
}

}

export class AuthAdapter{
  static login(loginParams){
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'Authorization': localStorage.getItem('jwt')
        },
      body: JSON.stringify(loginParams)
    }).then( response => response.json() )
  }

  static currentUser(){
    return fetch(`${baseUrl}/current_user`, {
      headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'Authorization': localStorage.getItem('jwt')
        },
    })

  }
}
