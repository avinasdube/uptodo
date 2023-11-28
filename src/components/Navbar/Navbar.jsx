import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logo">UpTodo</div>
      <div className="navlinks">
        <Link className='link' to='/tasklist'>Tasks</Link>
        <Link className='link' to='/add'>Add Tasks</Link>
      </div>
    </div>
  )
}

export default Navbar