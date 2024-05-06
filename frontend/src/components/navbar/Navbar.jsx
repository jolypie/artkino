import React, { useState } from 'react'
import './navbar.scss'
import logoImage from '../../images/logo.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserLoggedIn = false; 

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav>
        <ul className="navbar">
          {/* <Link to="/"><img src={logoImage} className="logo" alt="Logo" /></Link> */}
          <Link to="/" className='logo'>ARTKINO</Link>
          <li>
            <input type="search" placeholder="Search" />
          </li>
          {isUserLoggedIn ? (
            <li className="user" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <p className='userNAME'>USER</p> 
              <Avatar sx={{ bgcolor: deepPurple[500] }} className='Avatar'>U</Avatar>
              {isMenuOpen && (
                <div className='userMenu'>
                  <ul>
                    <li><a href="/profile">My Profile</a></li>
                    <li><a href="/">Subscription</a></li>
                    <li><a href="/">Settings</a></li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <CustomLink to="/login" className="sign_in_navbar">SIGN UP</CustomLink>
          )}

          {/*<span id="span">
            <SearchIcon sx={{ color: '#fff' }} />
          </span> */}
        </ul>
      </nav>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default Navbar