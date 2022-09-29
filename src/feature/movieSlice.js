import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const moviesAPI = `https://swapi.dev/api/films/?format=json`;

const fetchMovies = createAsyncThunk("movies/fetchMovies", () => {
  const movies = fetch(moviesAPI).then(res => res.json()).then(json => json);
//   const jsonData = await response.json();
//   const movies = await jsonData.results;
//   console.log("MOVIES --->", movies);
  return movies.results;
});

const initialState = {
  movies: [],
  loading: true,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [fetchMovies.loading]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [fetchMovies.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        movies: [...state.movies, action.payload],
      };
    },
  },
});

export const movieReducer = movieSlice.reducer;
