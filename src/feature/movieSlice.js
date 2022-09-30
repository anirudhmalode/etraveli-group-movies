import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const moviesAPI = `https://swapi.dev/api/films/?format=json`;

const fetchMovies = createAsyncThunk("movies/fetchMovies", () => {
  return fetch(moviesAPI).then(res => res.json()).then(json => json);
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
      console.log("ACTIONSSSSSSS", state, action)
      return {
        ...state,
        loading: false,
        movies: [...state.movies, action.payload.results],
      };
    },
  },
});

export const movieReducer = movieSlice.reducer;
