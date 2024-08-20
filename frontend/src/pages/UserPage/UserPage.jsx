import React from 'react';
import './userPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Playlist from '../../components/playlist/Playlist';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UserInfo from './UserInfo';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

function UserPage() {
  return (
    <div>
      <div className='movie-page'>
        <Navbar />
        <div className='page-container'>
          <div className="movie-container">

            <UserInfo />




            <div className="userPlaylistsMain">
              <Link to={`/favorite`} className='link'>
                <div>
                  <Playlist playlistTitle='Favorite'
                    icon={<FavoriteBorderIcon sx={{ color: grey[500], fontSize: 30 }} />}
                    playlistCount='0'
                  />
                </div>
              </Link>

              <Playlist playlistTitle='Watched'
                icon={<VisibilityOutlinedIcon sx={{ color: grey[500], fontSize: 30 }} />}
                playlistCount='0'
              />
              <Playlist playlistTitle='Watch Later'
                icon={<AccessTimeIcon sx={{ color: grey[500], fontSize: 30 }} />}
                playlistCount='0'
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage