export const getMovies = (option) => {
  return fetch(
    `https://api.themoviedb.org/3/trending/${option}/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        return data.results;
      } else {
        return [];
      }
    });
};

export const getMoviesResults = (input) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${input}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        return data.results;
      } else {
        return [];
      }
    });
};

export const getTvshowsResults = (input) => {
  return fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${input}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        return data.results;
      } else {
        return [];
      }
    });
};
