import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Film from '../../components/film/Film';
import Sidebar from '../../components/sidebar/Sidebar';
import '../Films/films.css';
import { API_KEY } from '../../api/api';
import { Link } from 'react-router-dom';
import TvShow from '../../components/tv_show/TvShow';

function Series() {
  const [seriesList, setSeriesList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const getSeries = () => {
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=vote_count.desc&watch_region=US`)
      .then(res => res.json())
      .then(json => {
        setSeriesList(json.results);
      });
  };

  const getGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setGenreList(json.genres));
  };

  useEffect(() => {
    getSeries();
    getGenres();
  }, []);

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
              {seriesList.map((tv) => (
                <Link to={`/series/${tv.id}`} key={tv.id}>
                  <TvShow tv={tv} getGenreNames={getGenreNames} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;