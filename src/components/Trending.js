import { useEffect, useState } from "react";
import { getMovies } from "../services/getMovies";
import { MovieCard } from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export const Trending = () => {
  const [option, setOption] = useState("all");
  const [data, setData] = useState([]);

  const handleOption = (newOption) => {
    setOption(newOption);
  };

  useEffect(() => {
    switch (option) {
      case "all":
        getMovies("all").then((result) => {
          setData(result);
        });
        break;
      case "movies":
        getMovies("movie").then((result) => {
          setData(result);
        });
        break;
      case "tvshows":
        getMovies("tv").then((result) => {
          setData(result);
        });
        break;
    }
  }, [option]);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            <FontAwesomeIcon icon={faFire} /> Trending Now
          </h1>
        </div>
        <ul className="trend-options">
          <li
            className={option === "all" ? "selected" : ""}
            onClick={() => handleOption("all")}
          >
            All
          </li>
          <li
            className={option === "movies" ? "selected" : ""}
            onClick={() => handleOption("movies")}
          >
            Movies
          </li>
          <li
            className={option === "tvshows" ? "selected" : ""}
            onClick={() => handleOption("tvshows")}
          >
            TV shows
          </li>
        </ul>
        {data.length > 0 ? (<div className="movie-grid">
          {data.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="trending" />
          ))}
        </div>) : <h2 className="no-movies">New trends are coming soon!</h2>}
      </div>
    </div>
  );
};
