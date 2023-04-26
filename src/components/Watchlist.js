import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading"><FontAwesomeIcon icon={faList} /> My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Item" : "Items"}
          </span>
        </div>
        {watchlist.length > 0 ? (<div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="watchlist" />
          ))}
        </div>) : <h2 className="no-movies">No movies in your list, add some!</h2>}
        
      </div>
    </div>
  );
};
