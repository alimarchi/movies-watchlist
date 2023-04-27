# Movies Watchlist

---

This application was built with React and JavaScript and utilizes the [TMDB API](https://www.themoviedb.org/documentation/api) to allow users to browse trending movies and TV shows, search for specific titles, and add them to their watchlist or the list of watched movies. While the project was originally created by [Matt The Dev](https://github.com/MattDobsonWeb/movie-watchlist-react), I have customized it to create my own personal version of the project, which includes new features and improvements.

#### Features

Here are the main new features that I implemented:

- **Search for movies or TV shows**: On the Add page, users can now choose whether they want to search for a movie or a TV show. Depending on the user's selection, the application will make a different API call with a different URL.
- **Trending page**: The home page features a Trending page, where users can browse the most popular titles of the week. Users can choose to display all, only movies, or only TV shows, which will trigger a different API call based on their selection.
- **Filter for movies or TV shows**: The Watchlist and Watched pages now have a select filter, which allows users to see all saved titles, only movies, or only TV shows.
- **Debounce**: The application now features a debounce function that avoids making too many API calls and searching every time a user types a letter in the text input on the Add page. This function uses an external library to optimize performance.

#### Libraries

- [React Router](https://github.com/remix-run/react-router)
- [Just Debounce It](https://github.com/angus-c/just#just-debounce-it)
- [Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)

#### API

- [TMDB API](https://www.themoviedb.org/documentation/api)

#### How to run the project locally:

To run the project locally, clone the repository and perform the following command-line actions:

```
cd movies-watchlist
npm install
npm run start
```

The application will automatically open in your browser at http://localhost:3000.

To use the API, you will need to obtain a free API key by registering on the [TMDB website](https://www.themoviedb.org/). Once you have your API key, create a `.env` file in the root folder of your project and store your API key there using the following name: `REACT_APP_TMDB_KEY`.
