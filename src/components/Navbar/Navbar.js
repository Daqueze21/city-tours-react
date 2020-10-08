import React from 'react';
import './Navbar.scss';
import logo from '../../Logo2.jpg';

const Navbar = () => {
   return (
      <nav className='navbar'>
         <img src={logo} alt='city tours logo' className='logo'></img>

         <ul className='nav-links'>
            <li>
            <a href='/' className='nav-link'>
               home
            </a>
            </li>
            <li>
            <a href='/' className='nav-link'>
               about
            </a>
            </li>
            <li>
            <a href='/' className='nav-link'>
               tours
            </a>
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;
