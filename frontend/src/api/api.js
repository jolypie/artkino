
import axios from 'axios';
export const API_KEY = 'e29b61ebf3a3be3058185d8bd8b51f67';
export const API_URL = 'https://api.themoviedb.org/3/';




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


// client/src/services/api.js

// // Добавление фильма в избранное
// export const addFavorite = async (movie) => {
//   // Создаем объект с данными фильма для отправки на сервер
//   const movieData = {
//     movieId: movie.id,                 // ID фильма из TMDb
//     title: movie.title,                // Название фильма
//     releaseDate: movie.release_date,   // Дата выхода фильма
//     voteAverage: movie.vote_average,   // Средняя оценка фильма
//     countries: movie.countries,        // Страны производства
//     genres: movie.genres,              // Жанры
//     director: movie.director,          // Режиссер фильма
//     cast: movie.cast                   // Список актеров
//   };

//   const response = await fetch('http://localhost:5500/api/film/favorites', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('token')}` // Токен аутентификации
//     },
//     body: JSON.stringify(movieData)  // Отправляем данные о фильме на сервер
//   });

//   return response.json();
// };

// client/src/services/api.js

// // Добавление фильма в избранное
// export const addFavorite = async (movie) => {
//   const response = await fetch('http://localhost:5500/api/film/favorites', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('token')}` // Токен аутентификации
//     },
//     body: JSON.stringify(movie)
//   });

//   return response.json();
// };

export const addFavorite = async (movie) => {
  const response = await fetch('http://localhost:5500/api/film/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Токен аутентификации
    },
    body: JSON.stringify(movie)  // Отправляем данные о фильме на сервер
  });

  if (!response.ok) {
    throw new Error('Failed to add favorite');
  }

  return response.json();
};


// Получение всех избранных фильмов текущего пользователя
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
      return response.data; // Вернет список избранных фильмов для данного пользователя
  } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
  }
};
};

// Удаление одного фильма из избранного
export const removeFavorite = async (movieId) => {
  const response = await fetch(`http://localhost:5500/api/film/favorites/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Токен аутентификации
    }
  });

  if (!response.ok) {
    throw new Error('Failed to remove favorite');
  }

  return response.json();
};


// Удаление всех избранных фильмов текущего пользователя
export const removeAllFavorites = async () => {
  const response = await fetch('http://localhost:5500/api/film/favorites', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Токен аутентификации
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

