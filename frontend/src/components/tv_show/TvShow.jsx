import React, { useState } from 'react';
import '../film/film.scss';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { green, grey, orange, red } from '@mui/material/colors';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from 'react-router-dom';

function TvShow({ tv, getGenreNames }) {
  const [isWatched, setIsWatched] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleIsWatchedClick = () => {
    setIsWatched(!isWatched);
  };

  const handleIsFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleIsWatchLaterClick = () => {
    setIsWatchLater(!isWatchLater);
  };

  return (
    <div className='film-item'>
      <Link to={`/series/${tv.id}`} className='film-link'>
      <div className='film-container'>
        <div className='film-image'>
            <img className='movie-poster' src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} />
            <PlayCircleOutlineIcon className='play-icon' sx={{ fontSize: 100, color: 'white' }} />
          </div>
              <div className="desc-film-cont">
            <div className='title-genres'>
              <p className='title'>{tv.name}</p>
              <p className='genres'>{getGenreNames(tv.genre_ids)}</p>
            </div>
            <div className="info">
              <StarBorderOutlinedIcon sx={{ color: orange[500], fontSize: 22 }} />
              <p className="rating">{tv.vote_average.toFixed(1)}</p>
              <p className="year">{new Date(tv.first_air_date).getFullYear()}</p>
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
      </Link>
    </div>
  );
}

export default TvShow;