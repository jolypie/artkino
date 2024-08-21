import React, { useEffect, useState } from 'react'
import './newReview.css';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import RatingStars from '../../ratingStars/RatingStars';

function NewReview() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/users/username', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
        } else {
          console.error('Failed to fetch username');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsername();
  }, []);

  const firstLetter = username.charAt(0).toUpperCase();
  return (
    <div className='new-review'>
      <div className="userInfoReview">
              <Avatar sx={{ bgcolor: deepPurple[500] }} className='review-Avatar'>
                {firstLetter}
              </Avatar>
              <p className='userName'>{username}</p> 
        {/* <div className="rating_stars">
          <RatingStars />
        </div> */}
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