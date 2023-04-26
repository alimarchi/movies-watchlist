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
