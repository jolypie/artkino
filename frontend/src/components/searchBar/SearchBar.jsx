import React, { useState } from 'react'
import './searchBar.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { green, grey, red } from '@mui/material/colors';

import ImportExportIcon from '@mui/icons-material/ImportExport';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SearchBar() {

  return (
    <div className='searchBar'>
      <div className="user-pref"> 
        <ul>
          <li><a href="/">All Films</a></li>
          <li><a href="/">
            <FavoriteBorderIcon sx={{ color: grey[500], fontSize: 20 }} className='fav-icon'/>
            Likes
            </a></li>
          <li><a href="/">
            <VisibilityOutlinedIcon sx={{ color: grey[500], fontSize: 20 }} className='watched-icon'/>
            Watched
            </a></li>
          <li><a href="/">
            <AccessTimeIcon sx={{ color: grey[500], fontSize: 20 }} className='watch-later-icon'/>
            Watch Later
            </a></li>
        </ul>
      </div>
      <div className="user-pref search"> 
        <ul>
          <li><a href="/">Genres</a></li>
          <li><a href="/">Rating</a></li>
          <li><a href="/">Year</a></li>
        </ul>
      </div>
      <div className="user-pref sort"> 
      <ul>
          <li><a>
            <ImportExportIcon sx={{ color: grey[500], fontSize: 20 }} className='fav-icon'/>
            Rating
            </a></li>
          <li><a>
            <ImportExportIcon sx={{ color: grey[500], fontSize: 20 }} className='watched-icon'/>
            Year
            </a></li>
          <li><a>
            <ImportExportIcon sx={{ color: grey[500], fontSize: 20 }} className='watch-later-icon'/>
            Popularity
            </a></li>
        </ul>
      </div>
    </div>
  )
}

// TODO
// Add arrows for sorting

export default SearchBar