import React from 'react'
import './userPage.scss';
import Navbar from '../../components/navbar/Navbar';
import { Avatar } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';
import Playlist from '../../components/playlist/Playlist';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function UserPage() {
  return (
    <div>
    <div className='movie-page'>
      <Navbar />
      <div className='page-container'>
        <div className="movie-container">
          
            <div className="userContainer">
              <div className="avatar">
                <Avatar sx={{ bgcolor: deepPurple[500], height: 150 , width: 150, fontSize: 75}} className='Avatar'>U</Avatar>
              </div>
              <div>
                <h1 className="username">User</h1>
              </div>
            </div>
            <hr />

            <div className="userPlaylistsMain">
              <Playlist playlistTitle='Favorite' 
              icon = {<FavoriteBorderIcon sx={{ color: grey[500], fontSize: 30 }} />}
              playlistCount = '10'
              />
              <Playlist playlistTitle='Watched' 
              icon = {<VisibilityOutlinedIcon sx={{ color: grey[500], fontSize: 30 }} />}
              playlistCount = '536'
              />
              <Playlist playlistTitle='Watch Later' 
              icon = {<AccessTimeIcon sx={{ color: grey[500], fontSize: 30 }} />}
              playlistCount = '57'
              />
            </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default UserPage