import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Select } from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  const options = ["all", "movies", "tvshows"];

  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [filteredWatchlist, setFilteredWatchlist] = useState(watchlist);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    switch (selectedValue) {
      case "all":
        setFilteredWatchlist(watchlist);
        break;
      case "movies":
        setFilteredWatchlist(watchlist.filter(
          (movie) => movie.title))
        break;
      case "tvshows":
        setFilteredWatchlist(watchlist.filter(
          (show) => show.name))
        break;
      default:
        setFilteredWatchlist(watchlist);
    }
  }, [selectedValue]);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            <FontAwesomeIcon icon={faList} /> My Watchlist
          </h1>
          <Select
            selectOptions={options}
            selectValue={selectedValue}
            setSelectValue={setSelectedValue}
          />
        </div>
        {filteredWatchlist.length > 0 ? (
          <div className="movie-grid">
            {filteredWatchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};
