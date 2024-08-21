
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



// favorite post
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

// favorite get
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

// favorite delete:id
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


// favorite delete
export const removeAllFavorites = async () => {
  const response = await fetch('http://localhost:5500/api/film/favorites', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  });

  return response.json();
};



//watched post

export const addWatched = async (movie) => {
  const response = await fetch('http://localhost:5500/api/film/watched', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(movie)
  });

  if (!response.ok) {
    throw new Error('Failed to add watched movie');
  }

  return response.json();
};


//watched get

export const getWatched = async () => {
  const response = await fetch('http://localhost:5500/api/film/watched', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch watched movies');
  }

  return response.json();
};


//watched delete:id

export const removeWatched = async (movieId) => {
  const response = await fetch(`http://localhost:5500/api/film/watched/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to remove watched movie');
  }

  return response.json();
};


//watched delete all

export const removeAllWatched = async () => {
  const response = await fetch('http://localhost:5500/api/film/watched', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to remove all watched movies');
  }

  return response.json();
};


//watch later post

export const addWatchLater = async (movie) => {
  const response = await fetch('http://localhost:5500/api/film/watchLater', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(movie)
  });

  if (!response.ok) {
    throw new Error('Failed to add watch later movie');
  }

  return response.json();
};


//watch later get

export const getWatchLater = async () => {
  const response = await fetch('http://localhost:5500/api/film/watchLater', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch watch later movies');
  }

  return response.json();
};


//watch later delete:id

export const removeWatchLater = async (movieId) => {
  const response = await fetch(`http://localhost:5500/api/film/watchLater/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to remove watch later movie');
  }

  return response.json();
};


//watch later delete all

export const removeAllWatchLater = async () => {
  const response = await fetch('http://localhost:5500/api/film/watchLater', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to remove all watch later movies');
  }

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





