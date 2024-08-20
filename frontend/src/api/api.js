
import axios from 'axios';
import {API_URL, API_KEY } from './apikey';




export const fetchTopRatedMovies = async (API_KEY) => {
    try {
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

export const fetchPopularMovies = async (API_KEY) => {
    try {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        const response = await fetch(URL);
        const data = await response.json();
        return data.results;
    }catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
};


export const addFavorite = async (movie) => {
  const response = await fetch('http://localhost:5500/api/film/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    },
    body: JSON.stringify(movie)  
  });

  if (!response.ok) {
    throw new Error('Failed to add favorite');
  }

  return response.json();
};


export const getFavorites = async () => {
  const response = await fetch('http://localhost:5500/api/film/favorites', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  return response.json();

  const getFavorites = async (userId) => {
  try {
      const response = await axios.get(`/api/favorites?userId=${userId}`);
      return response.data; 
  } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
  }
};
};


export const removeFavorite = async (movieId) => {
  const response = await fetch(`http://localhost:5500/api/film/favorites/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  });

  if (!response.ok) {
    throw new Error('Failed to remove favorite');
  }

  return response.json();
};



export const removeAllFavorites = async () => {
  const response = await fetch('http://localhost:5500/api/film/favorites', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  });

  return response.json();
};




const getMovieDetails = async (movieId) => {
  try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
              api_key: API_KEY,
              language: 'en-US',
          },
      });
      return response.data;
  } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
  }
};

export { getMovieDetails };

