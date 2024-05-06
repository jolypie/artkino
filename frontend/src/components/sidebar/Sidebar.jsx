import React from 'react';
import './sidebar.css';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

function Sidebar() {
  const categories = [
    { text: 'Films', icon: <TheatersOutlinedIcon sx={{ fontSize: 28 }} className='icon'/> },
    { text: 'TV-Shows', icon: <SlideshowIcon sx={{ fontSize: 28 }} className='icon'/> },
    { text: 'Top 250 Films', icon: <LocalActivityOutlinedIcon sx={{ fontSize: 28 }} className='icon'/> },
  ];

  const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Horror',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller',
    'Western',
  ];

  return (
    <div className='sidebar-container'>
      <div className='categories'>
        <ul>
        {categories.map((category, index) => (
            <li key={index} className={index % 2 === 0 ? 'darkRow' : 'lightRow'}>
              <a href="/films" className='category-icon-cont'>
                {category.icon}
                {category.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className='genres'>
        <p>GENRES</p>
        <ul>
          {genres.map((genre, index) => (
            <li key={index} className={index % 2 === 0 ? 'darkRow' : 'lightRow'}>
              <a href="/">{genre}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
