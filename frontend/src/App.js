import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom"
import Films from "./pages/Films/Films";
import Home from "./pages/Home/Home";
import MoviePage from "./pages/MoviePage/MoviePage";
import SignIn from "./pages/SignIn/SignIn";
import SearchResults from "./pages/SearchResults/SearchResults";
import Sidebar from "./components/sidebar/Sidebar";
import Series from "./pages/Series/Series";
import { API_KEY } from './api/api';
import { useEffect, useState } from "react";
import GenrePage from "./pages/GenrePage/GenrePage";
import UserPage from "./pages/UserPage/UserPage";
import Favorite from "./pages/UserPage/FavoritePage";

function App() {
//todo: страницы фильмов, убрать лайки и тд на главной, сделать поиск по популярности, добавить кэш поиска к юзеру, добавить плейлисты


  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
      const json = await response.json();
      setGenres(json.genres);
    } catch (error) {
      console.error('Failed to fetch genres:', error);
    }
  };
  

  useEffect(() => {
    getGenres();
  }, []);

  const user = localStorage.getItem('token');

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/films' element={<Films />}/>
        <Route path='/series' element={<Series />}/>
        <Route path='/genre/:genreId' element={<GenrePage />} />
        <Route path='/login' element={<SignIn />}/>
        <Route path='/search' element={<SearchResults />}/>
        <Route path="/film/:id" element={<MoviePage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
