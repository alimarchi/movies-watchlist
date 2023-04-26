import { useState } from "react";
import { ResultCard } from "./ResultCard";
import { RadioButton } from "./RadioButton";

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

  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    if (search === "movies") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
    } else if (search === "tvshows") {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
            console.log(data.results)
          } else {
            setResults([]);
          }
        });
    }
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder={search === "movies" ? "Search for a movie" : "Search for a tv show"}
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
