// import React, { useEffect, useState } from 'react';
// import Navbar from '../../components/navbar/Navbar';
// import Sidebar from '../../components/sidebar/Sidebar';
// import SearchBar from '../../components/searchBar/SearchBar';
// import { Link } from 'react-router-dom';
// import { getPopularMovies, API_KEY, fetchTopRatedMovies, fetchPopularMovies } from '../../api/api';
// import Film from '../../components/film/Film';

// function Films() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const moviesData = await fetchPopularMovies(API_KEY);
//       setMovies(moviesData);
//     };
//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Sidebar />
//       <div className='page-container'>
//         <div className="page">
//           <div className='films'>
//           <div className="rowFilms">
//             {movies.slice(0, 4).map((movie) => (
//               <Link to={`/film/${movie.id}`} key={movie.id}>
//                 <Film movie={movie} />
//               </Link>
//             ))}
//             </div>
//             <div className="rowFilms">
//             {movies.slice(5, 9).map((movie) => (
//               <Link to={`/film/${movie.id}`} key={movie.id}>
//                 <Film movie={movie} />
//               </Link>
//             ))}
//             </div>
//             <div className="rowFilms">
//             {movies.slice(10, 14).map((movie) => (
//               <Link to={`/film/${movie.id}`} key={movie.id}>
//                 <Film movie={movie} />
//               </Link>
//             ))}
//             </div>
//             <div className="rowFilms">
//             {movies.slice(15, 19).map((movie) => (
//               <Link to={`/film/${movie.id}`} key={movie.id}>
//                 <Film movie={movie} />
//               </Link>
//             ))}
//             </div>
//           </div>
          
//           <SearchBar />
//         </div>
        
//       </div>
      
//     </div>

    
//   )
// }


// export default Films;