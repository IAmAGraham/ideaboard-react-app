import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({style, title}) => (
  <nav className={`navbar navbar-${style}`}>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to="/" className='navbar-brand navImg'></Link>
      </div>
      <ul className="nav navbar-nav">
        <li><Link to="/boards">Boards</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
)

export default NavBar;
