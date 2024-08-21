import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

const API_KEY = 'e29b61ebf3a3be3058185d8bd8b51f67';
const API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

function Sidebar() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching genres:', error));
  }, []);

  const categories = [
    { text: 'Films', icon: <TheatersOutlinedIcon sx={{ fontSize: 28 }} className='icon' />, link: '/films' },
    { text: 'TV-Shows', icon: <SlideshowIcon sx={{ fontSize: 28 }} className='icon' />, link: '/series' },
    { text: 'Top 250 Films', icon: <LocalActivityOutlinedIcon sx={{ fontSize: 28 }} className='icon' />, link: '/top250' },
  ];

  return (
    <div className='sidebar-container'>
      <div className='categories'>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className={index % 2 === 0 ? 'darkRow' : 'lightRow'}>
              <Link to={category.link} className='category-icon-cont'>
                {category.icon}
                {category.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className='genres'>
        <p>GENRES</p>
        <ul>
          {loading ? (
            <li>Loading genres...</li>
          ) : (
            genres.map((genre, index) => (
              <li key={genre.id} className={index % 2 === 0 ? 'darkRow' : 'lightRow'}>
                <Link to={`/genre/${genre.id}`} className="genre-link">
                  {genre.name}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
