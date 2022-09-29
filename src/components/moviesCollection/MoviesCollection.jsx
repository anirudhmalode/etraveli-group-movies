import React, { useState } from "react";
import "./MoviesCollection.css";
import Grid from "@mui/material/Grid";
import { moviesRawData } from "../../mock/mock-data";
import MovieDetails from "../movieDetails/MovieDetails";
import MoviesHeader from "../moviesHeader/MoviesHeader";
import MoviesList from "../moviesList/MoviesList";
import { useSelector } from "react-redux";

const MoviesCollection = () => {
  const {movies} = useSelector(state => state);
  console.log("MOOOOOOOOOO", movies);
  const moviesData =
    moviesRawData && !!moviesRawData.results ? moviesRawData.results : [];
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState(moviesData);

  const handleChangeMovie = (selectedMovie) => setSelectedMovie(selectedMovie);

  const handleSort = (type) => {
    let sortedData = [];
    if (type === "YEAR") {
      sortedData = moviesData.sort((a, b) => {
        return new Date(b.release_date) - new Date(a.release_date);
      });
    } else {
      sortedData = moviesData.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSearchedMovies([...sortedData]);
  };

  const handleSearch = (text) =>
    setSearchedMovies(
      !!text
        ? moviesData.filter((mov) => mov.title.toLowerCase().includes(text))
        : [...moviesData]
    );

  return (
    <div>
      <div className="movies_header">
        <MoviesHeader onSort={handleSort} onSearch={handleSearch} />
      </div>
      <Grid container>
        <Grid item xs={7} className="movies_list">
          <MoviesList
            moviesData={searchedMovies}
            onChangeMovie={handleChangeMovie}
          />
        </Grid>
        <Grid item xs={5}>
          <MovieDetails selectedMovie={selectedMovie} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviesCollection;
