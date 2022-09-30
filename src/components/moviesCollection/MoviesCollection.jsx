import React, { useState, useEffect } from "react";
import "./MoviesCollection.css";
import Grid from "@mui/material/Grid";
// import { moviesRawData } from "../../mock/mock-data";
import MovieDetails from "../movieDetails/MovieDetails";
import MoviesHeader from "../moviesHeader/MoviesHeader";
import MoviesList from "../moviesList/MoviesList";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../feature/movieSlice"; 

const MoviesCollection = () => {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState(movies);

  const handleChangeMovie = (selectedMovie) => setSelectedMovie(selectedMovie);

  const handleSort = (type) => {
    let sortedData = [];
    const allMovies = [...movies];
    if (type === "YEAR") {
      sortedData = allMovies.sort((a, b) => {
        return new Date(b.release_date) - new Date(a.release_date);
      });
    } else {
      sortedData = allMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSearchedMovies([...sortedData]);
  };

  const handleSearch = (text) =>
    setSearchedMovies(
      !!text
        ? movies.filter((mov) => mov.title.toLowerCase().includes(text))
        : [...movies]
    );

  useEffect(() => {
    setSearchedMovies(movies);
    if(!!movies.length) return;
    dispatch(fetchMovies())
  }, [dispatch, movies]);

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
