import React, { useState } from 'react';
import '../film/film.scss';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { green, grey, orange, red } from '@mui/material/colors';
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
            </div>
          </div>
            

        
      </div>
      </Link>
    </div>
  );
}

export default TvShow;