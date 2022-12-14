import React from "react";
import "./MoviesList.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

function createData(episode, movieName, director, date, opening_crawl) {
  return { episode, movieName, director, date, opening_crawl };
}

const MoviesList = ({ moviesData, loading, onChangeMovie }) => {
  const allMovies = moviesData.map((movie) =>
    createData(
      `Episode ${movie.episode_id}`,
      movie.title,
      movie.director,
      movie.release_date,
      movie.opening_crawl
    )
  );
  const handleSelectedMovie = (movie) => onChangeMovie(movie);

  if (!moviesData.length && loading)
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1"> Episode </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1"> Movie Name </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1"> Director </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1"> Release Date </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!allMovies.length ? (
            allMovies.map((movie) => (
              <TableRow key={movie.episode}>
                <TableCell
                  className="link"
                  onClick={() => handleSelectedMovie(movie)}
                >
                  <Typography variant="body2"> {movie.episode} </Typography>
                </TableCell>
                <TableCell
                  className="link"
                  onClick={() => handleSelectedMovie(movie)}
                >
                  <Typography variant="body2"> {movie.movieName} </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2"> {movie.director}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2"> {movie.date} </Typography>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Typography variant="body2">No Movie Found!</Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoviesList;
