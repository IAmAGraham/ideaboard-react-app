const baseUrl = `http://localhost:3000/api/v1`

export default class BoardsAdapter {
  static allBoards(){
    // axios
    return fetch(`${this.url()}`, {
      headers: headers()
    })
    .then( response => response.json() )
  }

  static url(){
    return `${baseUrl}/allideaboards`
  }

  static create(board){
    return fetch(`${this.url()}`,
    {method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      board: {title: board.title, description: board.description}
      })
    })
    .then( response => response.json() )
  }

  static update(board){
   return fetch(`${this.url()}/${board.id}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({
      board: {title: board.title, description: board.description}
    })
  })
}

static destroy(id){
  return fetch(`${this.url()}/${id}`, {
    method: 'DELETE',
    headers: headers(),
  })
}

}
