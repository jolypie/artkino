import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Film from '../../components/film/Film';
import Sidebar from '../../components/sidebar/Sidebar';
import './films.css';
import { API_URL, API_KEY } from '../../api/apikey';
import { Link } from 'react-router-dom';

function Films() {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getMovies = async (page = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=vote_count.desc&watch_region=US`);
      const json = await response.json();
      setMovieList(json.results);
      setTotalPages(json.total_pages);
    } catch (error) {
      setError(error);
    }
  };

  const getGenres = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
      const json = await response.json();
      setGenreList(json.genres);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovies(currentPage);
    getGenres();
  }, [currentPage]);

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
            <div className="gridFilms">
              {movieList.map((movie) => (
                <Link to={`/film/${movie.id}`} key={movie.id}>
                  <Film movie={movie} getGenreNames={getGenreNames} />
                </Link>
              ))}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Films;
