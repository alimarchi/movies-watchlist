import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie, search }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((obj) => obj.id === movie.id);
  let storedMovieWatched = watched.find((obj) => obj.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">
            {search === "movies" ? movie.title : movie.name}
          </h3>
          <h4 className="release-date">
            {movie.release_date || movie.first_air_date
              ? movie.release_date
                ? movie.release_date.substring(0, 4)
                : movie.first_air_date.substring(0, 4)
              : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => {
              addMovieToWatchlist(movie);
            }}
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => {
              addMovieToWatched(movie);
            }}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
