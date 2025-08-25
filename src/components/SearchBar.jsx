// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  return <Paper 
  component="form" 
  onSubmit={() => {}}
  sx={{borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl: 2,
    mr: {sm: 5},
    boxShadow: 'none'
  }}
  >
    <input type="text" className="search-bar"
    onChange={() => {}}
    value="" />
    <IconButton type="submit" sx={{p:'10px', color: 'red'}}>
        <Search />
    </IconButton>
  </Paper>;
};

export default SearchBar;
