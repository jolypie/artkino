import React, { useState, useEffect } from 'react';
import './filmTitle.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import RatingStars from '../../ratingStars/RatingStars';
import { green, grey, orange, red } from '@mui/material/colors';
import { addFavorite, removeFavorite, getFavorites } from '../../../api/api';
import {API_URL, API_KEY } from '../../../api/apikey';

function FilmTitle({ title, rating, movieId, movieData }) {  // movieData - это полный объект данных о фильме
  const [isWatched, setIsWatched] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const [posterUrl, setPosterUrl] = useState('');

  useEffect(() => {
    fetchPoster();
    checkIfFavorite();
  }, [title]);

  const fetchPoster = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const posterPath = data.results[0].poster_path;
        setPosterUrl(`https://image.tmdb.org/t/p/original${posterPath}`);
      }
    } catch (error) {
      console.error('Error fetching poster:', error);
    }
  };

  const checkIfFavorite = async () => {
    try {
      const favorites = await getFavorites();
      const isFav = favorites.some(fav => fav.movieId === movieId);
      setIsFavorite(isFav);
    } catch (error) {
      console.error('Error checking favorites:', error);
    }
  };

  const handleIsFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(movieId);
        setIsFavorite(false);
      } else {
        await addFavorite(movieData);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Error handling favorite:', error.message);
    }
  };
  
  


  const handleIsWatchedClick = () => {
    setIsWatched(!isWatched);
  };

  const handleIsWatchLaterClick = () => {
    setIsWatchLater(!isWatchLater);
  };

  return (
    <div className="titleInfo" style={{ backgroundImage: `url(${posterUrl})` }}>
      <div className="background-blur" />
      <div className="film-grid">
        <div className="film-info-icons">
          <p className="film-title">{title}</p>
          <div className="film-icons">
            <div className="film-movieRating">
              <StarBorderOutlinedIcon sx={{ color: orange[500], fontSize: 30 }} />
              <p className="film-rating">{rating.toFixed(1)}</p>
            </div>
            <span onClick={handleIsFavoriteClick} className="film-fav-icon">
              {isFavorite ? (
                <FavoriteIcon sx={{ color: red[500], fontSize: 28 }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: 'white', fontSize: 28 }} />
              )}
            </span>
            <span onClick={handleIsWatchedClick} className="film-watched-icon">
              {isWatched ? (
                <VisibilityIcon sx={{ color: green[500], fontSize: 28 }} />
              ) : (
                <VisibilityOutlinedIcon sx={{ color: 'white', fontSize: 28 }} />
              )}
            </span>
            <span onClick={handleIsWatchLaterClick} className="film-watch-later-icon">
              {isWatchLater ? (
                <WatchLaterIcon sx={{ color: grey[500], fontSize: 28 }} />
              ) : (
                <AccessTimeIcon sx={{ color: 'white', fontSize: 28 }} />
              )}
            </span>
            <div className="ratingStars">
              <RatingStars rating={rating} />
            </div>
          </div>
        </div>
        <div className="film-play-icon">
          <PlayCircleIcon sx={{ fontSize: 140, color: 'white' }} className="playcircle" />
        </div>
      </div>
    </div>
  );
}

export default FilmTitle;
