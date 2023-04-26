import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Select } from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  const options = ["all", "movies", "tvshows"];

  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [filteredWatched, setFilteredWatched] = useState(watched);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    switch (selectedValue) {
      case "all":
        setFilteredWatched(watched);
        break;
      case "movies":
        setFilteredWatched(watched.filter((movie) => movie.title));
        break;
      case "tvshows":
        setFilteredWatched(watched.filter((show) => show.name));
        break;
      default:
        setFilteredWatched(watched);
    }
  }, [selectedValue]);


  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            <FontAwesomeIcon icon={faTv} /> Watched Movies and TV shows
          </h1>
          <Select
            selectOptions={options}
            selectValue={selectedValue}
            setSelectValue={setSelectedValue}
          />
        </div>
        {filteredWatched.length > 0 ? (
          <div className="movie-grid">
            {filteredWatched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
