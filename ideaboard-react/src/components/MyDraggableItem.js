
import Draggable from 'react-draggable'

export default class MyDraggableItem extends Draggable{

  shouldComponentUpdate(nextProp, nextState){
    // debugger
    if (nextState.x !== this.state.x || nextState.y !== this.state.y){
      // debugger
      return true
    }else{
      return false
    }
  }

  componentDidUpdate(){
    this.props.setCurrentItemCoords({x: this.state.x, y: this.state.y})
  }
}
