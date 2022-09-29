import React from 'react';
import './MoviesHeader.css';
import MoviesSearch from './components/MoviesSearch'
import MoviesSort from './components/MoviesSort'

const MoviesHeader = ({ onSort, onSearch }) => {
  return (
    <div className="movie_header">
        <div className="movies_sort">
            <MoviesSort onSort={onSort} />
        </div>
        <div className="movies_search">
            <MoviesSearch onSearch={onSearch} />
        </div>
    </div>
  )
}

export default MoviesHeader