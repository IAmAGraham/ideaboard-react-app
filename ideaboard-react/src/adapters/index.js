onst baseUrl = `http://localhost:3000/api`

export default class BoardsAdapter {
  static allBoards(){
    return fetch(`${this.url()}`)
    .then( response => response.json() )
  }

  static show(id){
    return fetch(`${this.url()}/${id}`)
    .then( response => response.json() )
  }

  static allIng(){
    return fetch(`${baseUrl}/metatags`)

    .then( response => response.json() )
  }

  static url(){
    return `${baseUrl}/boards`
  }

  static create(board){
    return fetch(`${this.url()}`,
    {method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
    body: JSON.stringify({
      board: {title: board.title, description: board.description}
      })
    })
    .then( response => response.json() )
  }

  static update(board){
   return fetch(`${this.url()}/${board.id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({
      board: {title: board.title, description: board.description}
    })
  })
}

static destroy(id){
  return fetch(`${this.url()}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
  })
}

}
