import React, { useState } from 'react';
import './film.scss';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { orange } from '@mui/material/colors';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from 'react-router-dom';

function Film({ movie, getGenreNames }) {
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
  const genreNames =
    movie.genres && Array.isArray(movie.genres)
      ? movie.genres.map((genre) => genre.name).join(', ')
      : 'No genres available';

  const genresText = 
    movie.genre_ids && getGenreNames 
      ? getGenreNames(movie.genre_ids)  
      : genreNames; 
  
  return (
    <div className='film-item'>
      <Link to={`/film/${movie.id}`} className='film-link'>
      <div className='film-container'>
        <div className='film-image'>
            <img className='movie-poster' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
            <PlayCircleOutlineIcon className='play-icon' sx={{ fontSize: 100, color: 'white' }} />
          </div>
              <div className="desc-film-cont">
            <div className='title-genres'>
              <p className='title'>{movie.title}</p>
              
              <p className="genres">{genresText}</p>
            </div>
            <div className="info">
              <StarBorderOutlinedIcon sx={{ color: orange[500], fontSize: 22 }} />
              <p className="rating">{movie.vote_average.toFixed(1)}</p>
              <p className="year">{new Date(movie.release_date).getFullYear()}</p>
            </div>
          </div>
            

        
      </div>
      </Link>
    </div>
  );
}

export default Film;
