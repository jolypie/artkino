import React, { useState } from 'react';
import './ratingStars.scss';
import ReactStarsRating from 'react-awesome-stars-rating';

function RatingStars() {
  const [starRating, setStarRating] = useState(0); 

  const onChange = (value) => {
    setStarRating(value);
  };

  return (
    <div className='reactStarsRating'>
      <ReactStarsRating onChange={onChange} value={starRating} />
    </div>
  )
}

export default RatingStars

