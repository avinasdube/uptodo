import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

import tasks from '../../assets/tasks.png';
import create from '../../assets/create.png';

const Navbar = () => {

  return (
    <div className="navbarContainer" data-testid="navbar">
      <div className="logo">UpTodo</div>
      <div className="navlinks">
        <Link className='link' to='/tasklist'><img src={tasks} alt=''></img></Link>
        <Link className='link' to='/add'><img src={create} alt=''></img></Link>
      </div>
    </div>
  )
}

export default Navbar