import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Film from '../../components/film/Film'
import Sidebar from '../../components/sidebar/Sidebar'
import './films.css';
import SearchBar from '../../components/searchBar/SearchBar';
import { Link } from 'react-router-dom';

function Films() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='page-container'>
        <div className="page">
          <div className='films'>
          <div className="rowFilms">
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
          </div>
          <div className="rowFilms">
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
          </div>
          <div className="rowFilms">
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
          </div>
          <div className="rowFilms">
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
            <Link to="/film"><Film /></Link>
          </div>
          </div>
          
          <SearchBar />
        </div>
        
      </div>
      
    </div>

    
  )
}

export default Films