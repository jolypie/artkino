import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom"
import Films from "./pages/Films/Films";
import Home from "./pages/Home/Home";
import MoviePage from "./pages/MoviePage/MoviePage";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/films' element={<Films />}/>
        <Route path='/film' element={<MoviePage />}/>
        <Route path='/login' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
