import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../../components/moviePageContent/moviePageContainer.scss';
import MoviePageContent from '../../components/moviePageContent/MoviePageContent';
import FilmTitle from '../../components/moviePageContent/filmTitle/FilmTitle';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../api/api';
import DescriptionText from '../../components/moviePageContent/DescriptionText/DescriptionText';
import DescInfo from '../../components/moviePageContent/DescInfo/DescInfo';
import MovieTrailer from '../../components/moviePageContent/movieTrailer/MovieTrailer';
import NewReview from '../../components/moviePageContent/NewReview/NewReview';

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState('');
  const [credits, setCredits] = useState({ director: '', cast: [] });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        const movieData = await movieResponse.json();

        const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
        const videosData = await videosResponse.json();

        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        const creditsData = await creditsResponse.json();

        const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        const trailerKey = trailer ? trailer.key : '';

        const director = creditsData.crew.find(member => member.job === 'Director');
        const cast = creditsData.cast.slice(0, 5);

        setMovie(movieData);
        setTrailerKey(trailerKey);
        setCredits({
          director: director ? director.name : 'N/A',
          cast: cast.map(member => member.name),
        });
      } catch (error) {
        console.error('Error fetching movie details or videos:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const movieData = {
    title: movie.title,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    countries: movie.production_countries.map(c => c.name),
    genres: movie.genres.map(g => g.name),
    director: credits.director,
    cast: credits.cast,
    description: movie.overview,
  };

  return (
    <div className='movie-page'>
      <Navbar />
      <div className='page-container'>
        <div className="movie-container">
          <FilmTitle title={movieData.title} rating={movieData.vote_average} />
          <div className='moviePageContent'>
            <DescriptionText description={movieData.description} />
            <DescInfo movie={movieData} />
            <div className="description">
              <MovieTrailer trailerKey={trailerKey} />
            </div>
            <div className="reviews-container">
              <NewReview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
