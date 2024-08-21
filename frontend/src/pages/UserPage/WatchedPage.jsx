import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import UserInfo from './UserInfo';
import Film from '../../components/film/Film';
import './favoritePage.scss';
import { API_KEY } from '../../api/apikey';
import { getWatched } from '../../api/api'; 
import axios from 'axios';

function WatchedPage() {
    const [watchedMovies, setWatchedMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState([]);

    const fetchMovieDetails = async (movieId) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching movie details:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchWatchedMovies = async () => {
            try {
                const response = await getWatched();
                setWatchedMovies(response);

                const details = await Promise.all(
                    response.map(async (movie) => {
                        const details = await fetchMovieDetails(movie.movieId);
                        return details;
                    })
                );

                setMovieDetails(details);
            } catch (error) {
                console.error('Error fetching watched movies:', error);
            }
        };

        fetchWatchedMovies();
    }, []);

    return (
        <div>
            <div>
                <div className='movie-page'>
                    <Navbar />
                    <div className='page-container '>
                        <div className="movie-container">
                            <UserInfo />
                            <div>
                                
                            </div>
                            <div className='filmsInPlaylist'>
                                {movieDetails.length === 0 ? (
                                    <p className='favNot'>You haven't added any Watched movies yet.</p>
                                ) : (
                                    <div className='films-grid'>
                                        {movieDetails.map((movie) => (
                                            movie && <Film key={movie.id} movie={movie} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchedPage;

