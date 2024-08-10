// import React, { useEffect, useState } from 'react';
// import './moviePageContainer.scss';
// import MovieTrailer from '../movieTrailer/MovieTrailer';
// import DescriptionText from './DescriptionText/DescriptionText';
// import DescInfo from './DescInfo/DescInfo';
// import NewReview from './NewReview/NewReview';
// import { useParams } from 'react-router-dom'; 
// import { API_KEY } from '../../api/api'; 
// import FilmTitle from '../../components/moviePageContent/filmTitle/FilmTitle';

// function MoviePageContent() {
//   const { id } = useParams(); 
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
//       .then(res => res.json())
//       .then(data => setMovie(data))
//       .catch(error => console.error('Error fetching movie details:', error));
//   }, [id]);

//   if (!movie) {
//     return <p>Loading...</p>; 
//   }

//   const movieData = {
//     title: movie.title,
//     release_date: movie.release_date,
//     vote_average: movie.vote_average,
//     countries: movie.production_countries.map(c => c.name),
//     genres: movie.genres.map(g => g.name),
//     director: movie.credits?.crew?.find(c => c.job === 'Director')?.name || 'N/A',
//     cast: movie.credits?.cast?.slice(0, 5).map(c => c.name) || [],
//     description: movie.overview
//   };

//   return (
//     <div className='moviePageContent'>
//       <FilmTitle title={movieData.title} rating={movieData.vote_average} />
//       <DescriptionText description={movieData.description} />
//       <DescInfo movie={movieData} />
//       <div className="description">
//         <MovieTrailer /> 
//       </div>
//       <div className="reviews-container">
//         <NewReview />
//       </div>
//     </div>
//   );
// }

// export default MoviePageContent;
