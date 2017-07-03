import React, { Component } from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import {newBoard, changeBoardAttributes} from 'react-router-dom';
import Board from '.components/Board';
import PublicBoard from '.components/PublicBoard';
import About from '.components/About';
import User from '.components/User';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import ReactTooltip from 'react-tooltip';



import NavBar from './NavBar';
import IdeaBoardsPageContainer from '../containers/IdeaBoardsPageContainer';


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      colorOn:false
    }
  }

  toggleSidebar(){
    this.props.changeBoardAttributes({
      sidebarActive: !this.props.boardAttributes.sidebarActive
    })
  }

  newBoard(){
    this.props.newBoard()
    if(this.props.token){
      this.props.push(`/${this.props.user.username}/b/new`)
    } else {
      this.props.push('/')
    }
  }

  render() {
    const sidebarActive={
      left=0
    }
    const sidbarInactive={
      left: -260
    }


    return (
      <div className="App">

      <div id='sidebar-wrapper' style={this.props.boardAttributes.sidebarActive ? sidebarActive : sidebarInactive}>
        <div id='sidebar-menu'
          <span data-tip="View Menu" data-for='sidebar-operations' className='operation-buttons' onClick={this.toggleSidebar.bind(this)}>
          </span>
          <span data-tip="New Board" data-for='sidebar-operations' className='operation-buttons' onClick={this.newBoard.bind(this)}>
          </span>
        </div>

        <div id='sidebar'>
          <User />
          <div id="about-ideaboard">
            <Link to='/about'>
              <span className='meta' id='about-ideaboard'>About IdeaBoard</span>
            </Link>
          </div>
        </div>
      </div>

      <div id="board-container">
        <Switch>
          <Route exact path='/' component={Board}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/:username' component={Board}/>
          <Route exact path=':username/b/:board_id' component={Board}/>
          <Route exact path='/:username' component={PublicBoard}/>
        </Switch>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    board_id: state.board.id,
    token: state.manageLogin.token,
    boardAttributes: state.boardAttributes,
    board: state.board
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newBoard: newBoard,
    changeBoardAttributes: changeBoardAttributes
    push: push
  }, dispatch)
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp

// <NavBar title="IdeaBoard" style='inverse' />
// <Route path='/boards' component={IdeaBoardsPage} />
// <Route path='/about' render={ () => {
//   return <p>Quick about page</p>
// }} />
// </div>
