// import React from 'react';

// const MovieTrailer = ({ videoId }) => {
//   return (
//     <div>
//       <iframe
//         width="100%"
//         height="500"
//         src={`https://www.youtube.com/embed/${videoId}`}
//         frameBorder="0"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default MovieTrailer;

import React from 'react';

const MovieTrailer = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/smTK_AeAPHs`}
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '10px' }}
      />
    </div>
  );
};

export default MovieTrailer;