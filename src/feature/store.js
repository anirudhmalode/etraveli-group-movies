import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from './movieSlice';

export default configureStore({
    reducer: {
        movies: MovieReducer
    },
});