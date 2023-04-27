import { useCallback, useState } from "react";
import { ResultCard } from "./ResultCard";
import { RadioButton } from "./RadioButton";
import debounce from "just-debounce-it";
import { getMoviesResults, getTvshowsResults } from "../services/getMovies";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [search, setSearch] = useState("movies");

  const handleMoviesChange = () => {
    setSearch("movies");
  };

  const handleTvshowsChange = () => {
    setSearch("tvshows");
  };

  const debouncedGetMovies = useCallback(
    debounce((value) => {
      getMoviesResults(value).then((result) => {
        setResults(result);
      });
    }, 500),
    []
  );

  const debounceGetTvshows = useCallback(
    debounce((value) => {
      getTvshowsResults(value).then((result) => {
        setResults(result);
      });
    }, 500),
    []
  );

  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    if (search === "movies") {
      debouncedGetMovies(event.target.value);
    } else if (search === "tvshows") {
      debounceGetTvshows(event.target.value);
    }
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder={
                search === "movies"
                  ? "Search for a movie"
                  : "Search for a tv show"
              }
              value={query}
              onChange={onChange}
            />
          </div>
          <div className="radiobutton-container">
            <RadioButton
              label="Movies"
              value={search === "movies"}
              onChange={handleMoviesChange}
            />
            <RadioButton
              label="TV Shows"
              value={search === "tvshows"}
              onChange={handleTvshowsChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} search={search} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
