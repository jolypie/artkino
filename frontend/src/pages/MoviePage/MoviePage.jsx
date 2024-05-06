import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './moviePage.css'
import FilmTitle from '../../components/filmTitle/FilmTitle';
import MoviePageContent from '../../components/moviePageContent/MoviePageContent';

function MoviePage() {

  return (
    <div className='movie-page'>
      <Navbar />
      <div className='page-container'>
        <div className="movie-container">
          <FilmTitle />
          <MoviePageContent />
        </div>
      </div>
    </div>
  )
}

export default MoviePage