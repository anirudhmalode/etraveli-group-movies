import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const moviesAPI = `https://swapi.dev/api/films/?format=json`;

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async() => {
  return fetch(moviesAPI).then(res => res.json());
});

const initialState = {
  movies: [],
  loading: true,
  error: ""
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loading =  true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = (!!action.payload && !!action.payload.results.length) ? action.payload.results : []
    },
    [fetchMovies.rejected]: (state) => {
      state.loading = false;
      state.error = "Error while fetching movies!"
    },
  },
});

export default movieSlice.reducer;
