import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../SeriesPage/seriesPage.css';
import SeriesPageContent from '../../components/seriesPageContent/SeriesPageContent';
import SeriesTitle from '../../components/seriesPageContent/SeriesTitle';

import { useParams } from 'react-router-dom'; 
import { API_KEY } from '../../api/api'; 
import DescriptionText from '../../components/seriesPageContent/DescriptionText/DescriptionText';
import DescInfo from '../../components/seriesPageContent/DescInfo/DescInfo';
import SeriesTrailer from '../../components/seriesTrailer/SeriesTrailer';
import NewReview from '../../components/seriesPageContent/NewReview/NewReview';

function SeriesPage() {
  const { id } = useParams(); 
  const [tv, setTv] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setTv(data))
      .catch(error => console.error('Error fetching TV show details:', error));
  }, [id]);

  if (!tv) {
    return <p>Loading...</p>; 
  }

  const tvData = {
    name: tv.name,
    first_air_date: tv.first_air_date,
    vote_average: tv.vote_average,
    countries: tv.production_countries.map(c => c.name),
    genres: tv.genres.map(g => g.name),
    creator: tv.credits?.crew?.find(c => c.job === 'Creator')?.name || 'N/A',
    cast: tv.credits?.cast?.slice(0, 5).map(c => c.name) || [],
    description: tv.overview
  };


  return (
    <div className='series-page'>
      <Navbar />
      <div className='page-container'>
        <div className="series-container">
        <SeriesTitle title={tvData.name} rating={tvData.vote_average} />
        <div className='seriesPageContent'>
      
      <DescriptionText description={tvData.description} />
      <DescInfo tv={tvData} />
      <div className="description">
        <SeriesTrailer /> 
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

export default SeriesPage;