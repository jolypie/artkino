import React from 'react';
import './descInfo.css';

function DescInfo({ movie }) { 
  const { title, release_date, vote_average, countries, genres, director, cast } = movie;

  return (
    <div className="descInfo">
      <ul>
        <li className='info-darkRow'>
          <p>Title <span>{title}</span></p>
        </li>
        <li className='info-lightRow'>
          <p>Year <span>{new Date(release_date).getFullYear()}</span></p>
        </li>
        <li className='info-darkRow'>
          <p>Rating <span>{vote_average.toFixed(1)}</span></p>
        </li>
        <li className='info-lightRow'>
          <p>Countries <span>{countries.join(', ')}</span></p>
        </li>
        <li className='info-darkRow'>
          <p>Genres <span>{genres.join(', ')}</span></p>
        </li>
        <li className='info-lightRow'>
          <p>Director <span>{director}</span></p>
        </li>
        <li className='info-darkRow'>
          <p>Cast <span>{cast.join(', ')}</span></p>
        </li>
      </ul>
    </div>
  );
}

export default DescInfo;
