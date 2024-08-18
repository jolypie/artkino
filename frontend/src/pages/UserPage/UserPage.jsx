import React, { useEffect, useState } from 'react';
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
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/users/username', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
        } else {
          console.error('Failed to fetch username');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsername();
  }, []);

  const firstLetter = username.charAt(0).toUpperCase();
  return (
    <div>
    <div className='movie-page'>
      <Navbar />
      <div className='page-container'>
        <div className="movie-container">
          
            <div className="userContainer">
              <div className="avatar">
                <Avatar sx={{ bgcolor: deepPurple[500], height: 150 , width: 150, fontSize: 75}} className='Avatar'>
                  {firstLetter}
                </Avatar>
              </div>
              <div>
                <h1 className="username">{username}</h1>
              </div>
            </div>
            <hr />

            <div className="userPlaylistsMain">
              <Playlist playlistTitle='Favorite' 
              icon = {<FavoriteBorderIcon sx={{ color: grey[500], fontSize: 30 }} />}
              playlistCount = '0'
              />
              <Playlist playlistTitle='Watched' 
              icon = {<VisibilityOutlinedIcon sx={{ color: grey[500], fontSize: 30 }} />}
              playlistCount = '0'
              />
              <Playlist playlistTitle='Watch Later' 
              icon = {<AccessTimeIcon sx={{ color: grey[500], fontSize: 30 }} />}
              playlistCount = '0'
              />
            </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default UserPage