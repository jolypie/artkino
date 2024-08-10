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
// import SeriesPage from "./pages/SeriesPage/SeriesPage";

function App() {
  const [genres, setGenres] = useState([]);

  const getGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setGenres(json.genres));
  };

  useEffect(() => {
    getGenres();
  }, []);

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
      </Routes>
    </div>
  );
}

export default App;
