import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchComponent from "./component/search";

import "./App.css";

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchContact = async () => {
      const movieFetch = await axios.get(
        "https://www.omdbapi.com/?i=tt3896198&apikey=53b5bde7"
      );
      setMovie(movieFetch.data);
    };
    fetchContact();
  }, []);

  return (
    <div className="App">
      <div className="movieCard">
        <div className="title">{movie.Title}</div>
        <div className="imgDiv">
          <img src={movie.Poster} alt="movie poster" />
        </div>
        <div className="movieBotom">
          <h1>{movie.Title}</h1>
          <div className="movieDetails">
            <div className="release">
              <div className="movieDetailsTitle">Released:</div>
              {movie.Released}
            </div>
            <div className="release">
              <div className="movieDetailsTitle">Rated:</div>
              {movie.imdbRating}
            </div>
            <div className="release">
              <div className="movieDetailsTitle">Rated:</div>
              {movie.Rated}
            </div>
            <div className="release">
              <div className="movieDetailsTitle">Runtime:</div>
              {movie.Runtime}
            </div>
          </div>
          <p>{movie.Plot}</p>
        </div>
      </div>
      <SearchComponent parentState={{ movie, setMovie }} />
    </div>
  );
}

export default App;
