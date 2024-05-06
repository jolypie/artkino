import React, { useState } from 'react'
import './filmTitle.css'
import poster from '../../images/fantastic_planet.jpg';
import { green, grey, orange, red } from '@mui/material/colors';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import RatingStars from '../ratingStars/RatingStars';


function FilmTitle() {

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
    <div>
          <div className="titleInfo">
            <div className="background-blur" />
            <div className="film-grid">
              <div className="film-info-icons">
              <p className="film-title">Title will be here</p>
              <div className="film-icons">
                <div className="film-movieRating">
                  <StarBorderOutlinedIcon sx={{ color: orange[500], fontSize: 30}}/>
                  <p className="film-rating">8.4</p>
                </div>
                  <span onClick={handleIsFavoriteClick} className='film-fav-icon'>
                    {isFavorite ? <FavoriteIcon sx={{ color: red[500], fontSize: 28 }} /> : <FavoriteBorderIcon sx={{ color: 'white', fontSize: 28 }} />}
                  </span>
                <span onClick={handleIsWatchedClick} className='film-watched-icon'>
                  {isWatched ? <VisibilityIcon sx={{ color: green[500], fontSize: 28 }} /> : <VisibilityOutlinedIcon sx={{ color: 'white', fontSize: 28 }} />}
                </span>
                <span onClick={handleIsWatchLaterClick} className='film-watch-later-icon'>
                    {isWatchLater ? <WatchLaterIcon sx={{ color: grey[500], fontSize: 28 }} /> : <AccessTimeIcon sx={{ color: 'white', fontSize: 28 }} />}
                </span>
                <div className="ratingStars">
                  <RatingStars />
                </div>
              </div>
              
              </div>
              <div className='film-play-icon'>
                <PlayCircleIcon sx={{fontSize: 140, color: 'white'}} className='playcircle'/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default FilmTitle