import React from 'react'
import './newReview.css';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import RatingStars from '../../ratingStars/RatingStars';

function NewReview() {
  return (
    <div className='new-review'>
      <div className="userInfoReview">
        <Avatar sx={{ bgcolor: deepPurple[500] }} className='review-Avatar'>U</Avatar>
        <p className="userName">USER</p>
        <div className="rating_stars">
          <RatingStars />
        </div>
      </div>
        <textarea
          id="review-input"
          placeholder="Write your review here..."
          className="review-input"
        />
      <div className="button_submit">
        <button button id="submit-review">Submit Review</button>
      </div>
   </div>
  )
}

export default NewReview