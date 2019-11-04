import React, { useState } from "react";
import axios from "axios";

export default function SearchComponent({ parentState }) {
  const [movieSearch, setMovieSearch] = useState([]);
  const { movie, setMovie } = parentState;

  async function searchFunct(e) {
    let typedItem = e.target.value;
    const movieFetch = await axios.get(
      `http://www.omdbapi.com/?apikey=53b5bde7&s=${typedItem}`
    );

    if (!movieFetch.data.Error) {
      setMovieSearch(movieFetch.data.Search);
    } else {
      setMovieSearch([]);
    }
  }

  async function getDetails(movieID) {
    const movieFetch = await axios.get(
      `http://www.omdbapi.com/?i=${movieID}&apikey=53b5bde7`
    );
    setMovie(movieFetch.data);
  }
  return (
    <div className="search">
        <form>
      <div className="innerSearch">
            
        <input
          type="text"
          name="item"
          placeholder="Search movie..."
          onChange={searchFunct}
        ></input>
        <button type="reset" className="btn">X</button>
      </div>
        </form>
      {movieSearch.map(movie => {
        return (
          <li onClick={() => getDetails(movie.imdbID)}>
            <div className="searchImg">
              <img src={movie.Poster} alt="movie poster" />
            </div>
            {movie.Title}
          </li>
        );
      })}
    </div>
  );
}
