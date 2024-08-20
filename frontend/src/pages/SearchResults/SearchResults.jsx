import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Film from '../../components/film/Film';
import {API_URL, API_KEY } from '../../api/apikey';
import './searchResults.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(res => res.json())
        .then(json => setSearchResults(json.results));
    }

    // Fetch genres
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(json => setGenreList(json.genres));
  }, [query]);

  const getGenreNames = (genreIds) => {
    return genreIds.map(id => {
      const genre = genreList.find(g => g.id === id);
      return genre ? genre.name : '';
    }).join(', ');
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='page-container'>
        <div className="page">
          <div className='films'>
            <div className="gridFilms">
            {searchResults.length > 0 ? (
            searchResults.map(movie => (
              <Link to={`/film/${movie.id}`} key={movie.id}>
               <Film key={movie.id} movie={movie} getGenreNames={getGenreNames} />
              </Link>
            ))
              ) : (
                <p>No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
