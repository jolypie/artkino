import React from 'react';

const MovieTrailer = ({ trailerKey }) => {
  if (!trailerKey) {
    return <p>Trailer not available</p>;
  }

  return (
    <div>
      <iframe
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '10px' }}
      />
    </div>
  );
};

export default MovieTrailer;
