import React, {Component} from 'react';

export default function StickyDetail({stickies, deleteSticky}){
  if (!stickies){
    return null
  }

  return(
    <div>
      <button onClick={() => deleteSticky(stickies.id) } className="btn btn-danger">X</button>
      <button onClick={this.editSticky}>Edit</button>
      <p>{this.state.activeSticky.content}</p>
    </div>
  )
}
