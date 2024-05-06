import React, { useState } from 'react'
import './film.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { green, grey, orange, red } from '@mui/material/colors';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function Film() {
  const [isWatched, setIsWatched] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleIsWatchedClick = () => {
    setIsWatched(!isWatched);
  }

  const handleIsFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  }

  const handleIsWatchLaterClick = () => {
    setIsWatchLater(!isWatchLater);
  }

  return (
    <div className='film-container'>
      <div className='film-image'>
        <PlayCircleIcon className='play-icon' sx={{fontSize: 80, color: 'black'}}/>
      </div>
      <div className="desc-film-cont">
        <div className='title-genres'>
          <p className='title'>Title</p>
          <p className='genres'>&#183; genre1, genre2</p>
        </div>
        <div className="info">
          <StarBorderOutlinedIcon sx={{ color: orange[500], fontSize: 22}}/>
          <p className="rating">8.4</p>
          <p className="year">1960</p>
          <span onClick={handleIsFavoriteClick} className='fav-icon'>
            {isFavorite ? <FavoriteIcon sx={{ color: red[500], fontSize: 20 }} /> : <FavoriteBorderIcon sx={{ color: grey[500], fontSize: 20 }} />}
          </span>
          <span onClick={handleIsWatchedClick} className='watched-icon'>
            {isWatched ? <VisibilityIcon sx={{ color: green[500], fontSize: 20 }} /> : <VisibilityOutlinedIcon sx={{ color: grey[500], fontSize: 20 }} />}
          </span>
          <span onClick={handleIsWatchLaterClick} className='watch-later-icon'>
            {isWatchLater ? <WatchLaterIcon sx={{ color: grey[500], fontSize: 20 }} /> : <AccessTimeIcon sx={{ color: grey[500], fontSize: 20 }} />}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Film