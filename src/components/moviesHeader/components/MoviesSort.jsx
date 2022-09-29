import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const sortTypes = {
  year: 'YEAR',
  episode: 'EPISODE'
}

const MoviesSort = ({ onSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button
        aria-describedby={id}
        style={{textTransform: 'none', backgroundColor: "#ffffff"}}
        variant="outlined"
        onClick={handleClick}
      >
        Sort by...
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1 }}>Sort by...</Typography>
        <Box sx={{ width: "150px", bgcolor: "background.paper" }}>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => onSort(sortTypes.episode)}>
                  <ListItemText primary="Episode" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => onSort(sortTypes.year)}>
                  <ListItemText primary="Year" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Popover>
    </div>
  );
};

export default MoviesSort;
