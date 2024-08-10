import React from 'react'
import './playlist.scss';

function Playlist({playlistTitle, icon, playlistCount}) {
  return (
    <div>
      <div className="playlistContainer">
        <div className="playlistIcon">{icon}</div>
        <h1 className='playlistTitle'>{playlistTitle}</h1>
        <h2 className='playlistCount'>{playlistCount}</h2>
      </div>
    </div>
  )
}

export default Playlist