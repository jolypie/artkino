import React from 'react'
import './moviePageContainer.scss';
import MovieTrailer from '../movieTrailer/MovieTrailer';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import DescriptionText from './DescriptionText/DescriptionText';
import DescInfo from './DescInfo/DescInfo';
import NewReview from './NewReview/NewReview';

function MoviePageContent() {
  return (
    <div className='moviePageContent'>
      <DescriptionText />
      <DescInfo />
      <div className="description">
        <MovieTrailer />
      </div>
      <div className="reviews-container">
        <NewReview />
      </div>
    </div>
  )
}

export default MoviePageContent