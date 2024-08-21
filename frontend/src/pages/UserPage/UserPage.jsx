import React, { useState, useEffect } from 'react';
import './userPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Playlist from '../../components/playlist/Playlist';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';

function UserPage() {
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    async function fetchFavoriteCount() {
      try {
        const response = await fetch('http://localhost:5000/api/film/favorites/count', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',

          },
          credentials: 'include'
        });

        const data = await response.json();
        setFavoriteCount(data.count);
      } catch (error) {
        console.error('Error fetching favorite count:', error);
      }
    }

    fetchFavoriteCount();
  }, []);

  return (
    <div>
      <div className='movie-page'>
        <Navbar />
        <div className='page-container '>
          <div className="movie-container ">

            <UserInfo />

            <div className="userPlaylistsMain">
              <Link to={`/favorite`} className='link'>
                <div>
                  <Playlist
                    playlistTitle='Favorite'
                    icon={<FavoriteBorderIcon sx={{ color: 'white', fontSize: 30 }} />}
                    // playlistCount={favoriteCount} doesn't work
                    colorClass='favoriteColor'
                  />
                </div>
              </Link>

              <Link to={`/watched`} className='link'>
                <div>
                  <Playlist
                    playlistTitle='Watched'
                    icon={<VisibilityOutlinedIcon sx={{ color: 'white', fontSize: 30 }} />}
                    // playlistCount='0'
                    colorClass='watchedColor'
                  />
                </div>
              </Link>

              <Link to={`/watchlater`} className='link'>
                <div>
                  <Playlist
                    playlistTitle='Watch Later'
                    icon={<AccessTimeIcon sx={{ color: 'white', fontSize: 30 }} />}
                    // playlistCount='0'
                    colorClass='watchLaterColor'
                  />
                </div>
              </Link>



            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;
