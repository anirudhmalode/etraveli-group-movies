import React from "react";
import "./MovieDetails.css";
import { Typography } from "@mui/material";

const MovieDetails = ({ selectedMovie }) => {
  return (
    <div className="movie_details_container">
      {!!selectedMovie ? (
        <div className="movie_detail">
          <Typography variant="subtitle1" mb={2}>
            {selectedMovie.episode} : {selectedMovie.movieName}
          </Typography>
          <Typography variant="body2">
            Director : {selectedMovie.director}
          </Typography>
          <Typography variant="body2" mb={1}>
            Release Date : {selectedMovie.date}
          </Typography>
          <Typography variant="body2">{selectedMovie.opening_crawl}</Typography>
        </div>
      ) : (
        <div className="movie_details_blank">No Movie Details</div>
      )}
    </div>
  );
};

export default MovieDetails;
