import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faXmark,
  faEyeSlash,
  faList,
} from "@fortawesome/free-solid-svg-icons";

export const MovieControls = ({ movie, type }) => {
  const {
    watched,
    watchlist,
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
    addMovieToWatchlist,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((obj) => obj.id === movie.id);
  let storedMovieWatched = watched.find((obj) => obj.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <FontAwesomeIcon icon={faEyeSlash} size="lg" />
          </button>
          <button className="ctrl-btn">
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              onClick={() => removeFromWatched(movie.id)}
            />
          </button>
        </>
      )}
      {type === "trending" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatchlist(movie)} disabled={watchlistDisabled}>
            <FontAwesomeIcon
              icon={faList}
              size="lg"
            />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => addMovieToWatched(movie)}
            disabled={watchedDisabled}
          >
            <FontAwesomeIcon icon={faEye} size="lg" />
          </button>
        </>
      )}
    </div>
  );
};
