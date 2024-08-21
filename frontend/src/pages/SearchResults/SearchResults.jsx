import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Film from '../../components/film/Film';
import { API_URL, API_KEY } from '../../api/apikey';
import './searchResults.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const getSearchResults = async (query, page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&sort_by=popularity.desc`);
      const json = await response.json();
      setSearchResults(json.results);
      setTotalPages(json.total_pages);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const getGenres = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      const json = await response.json();
      setGenreList(json.genres);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (query) {
      getSearchResults(query, currentPage);
    }
    getGenres();
  }, [query, currentPage]);

  const getGenreNames = (genreIds) => {
    return genreIds.map(id => {
      const genre = genreList.find(g => g.id === id);
      return genre ? genre.name : '';
    }).join(', ');
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='page-container'>
        <div className="page">
          <div className='films'>
            {loading ? (
              <p>Loading movies...</p>
            ) : (
              <>
                <div className="gridFilms">
                  {searchResults.length > 0 ? (
                    searchResults.map(movie => (
                      <Link to={`/film/${movie.id}`} key={movie.id}>
                        <Film movie={movie} getGenreNames={getGenreNames} />
                      </Link>
                    ))
                  ) : (
                    <p>No results found</p>
                  )}
                </div>
                <div className='pagination'>
                  <button className='buttunPages'
                    onClick={() => {
                      if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                      }
                    }}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span className='pageCounter'>Page {currentPage} of {totalPages}</span>
                  <button className='buttunPages'
                    onClick={() => {
                      if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                      }
                    }}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
