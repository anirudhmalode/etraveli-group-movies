import React, { useState } from "react";
import "../MoviesHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const MoviesSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (updatedvalue) => {
    onSearch(updatedvalue.toLowerCase());
    setSearchText(updatedvalue);
  };

  return (
    <TextField
      id="input-with-icon-textfield"
      label="Type to Search"
      size="small"
      sx={{ width: "80vw", backgroundColor: "#ffffff" }}
      value={searchText}
      onChange={(e) => handleInputChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon size="small" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default MoviesSearch;
