

export const API_KEY = 'e29b61ebf3a3be3058185d8bd8b51f67';
export const API_URL = 'https://api.themoviedb.org/3/';




export const fetchTopRatedMovies = async (API_KEY) => {
    try {
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

export const fetchPopularMovies = async (API_KEY) => {
    try {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        const response = await fetch(URL);
        const data = await response.json();
        return data.results;
    }catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
};

