import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isUserLoggedIn = !!localStorage.getItem("token");
  const [username, setUsername] = useState('');

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

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
    window.location.reload(); 
  };

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/users/username', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
        } else {
          console.error('Failed to fetch username');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsername();
  }, []);

  const firstLetter = username.charAt(0).toUpperCase();
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
              <p className='userNAME'>{username}</p> 
              <Avatar sx={{ bgcolor: deepPurple[500] }} className='Avatar'>
                {firstLetter}
              </Avatar>
              {isMenuOpen && (
                <div className='userMenu'>
                  <ul>
                    <li><a href="/profile">My Profile</a></li>
                    <li><a href="/">Settings</a></li>
                    <li><a onClick={handleLogout}>Log Out</a></li>
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
  );
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
  );
}

export default Navbar;
