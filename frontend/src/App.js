import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom"
import Films from "./pages/Films/Films";
import Home from "./pages/Home/Home";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/films' element={<Films />}/>
        <Route path='/film' element={<MoviePage />}/>
      </Routes>
    </div>
  );
}

export default App;
