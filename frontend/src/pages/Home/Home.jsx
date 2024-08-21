import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import FadeSlider from '../../components/slider/FadeSlider';
import Film from '../../components/film/Film';
import { API_KEY } from '../../api/apikey';
import axios from 'axios';

function Home() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [moviesData, setMoviesData] = useState([]);


  const movieIds = [346698, 787699, 335977, 420634, 713704];

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const responses = await Promise.all(
          movieIds.map(id =>
            axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
              params: {
                api_key: API_KEY,
                language: 'en-US'
              }
            })
          )
        );

        const movies = responses.map(response => response.data);
        setMoviesData(movies);
        setFeaturedMovies(movieIds);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='page-container'>
        <FadeSlider />
        <div className='trending'>
          <div className='h1trend'>
          <h1>Trending this week!</h1>
          </div>
          
          <div className='films-grid'>
            
            {moviesData.length > 0 ? (
              moviesData.map(movie => (
                <Film key={movie.id} movie={movie} />
              ))
            ) : (
              <p>Loading movies...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
