import React, { useState } from 'react';
import './navbar.scss';
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isUserLoggedIn = false; 

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <nav>
        <ul className="navbar">
          <Link to="/" className='logo'>ARTKINO</Link>
          <li className="search-container">
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress}
            />
            <SearchOutlinedIcon className='search-icon' onClick={handleSearch} sx={{color: 'black'}} />
          </li>
          {isUserLoggedIn ? (
            <li className="user" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <p className='userNAME'>USER</p> 
              <Avatar sx={{ bgcolor: deepPurple[500] }} className='Avatar'>U</Avatar>
              {isMenuOpen && (
                <div className='userMenu'>
                  <ul>
                    <li><a href="/profile">My Profile</a></li>
                    <li><a href="/">Settings</a></li>
                    <li><a href="/">Log Out</a></li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <CustomLink to="/login" className="sign_in_navbar">SIGN UP</CustomLink>
          )}
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

export default Navbar;
