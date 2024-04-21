import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
const SearchField = () => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e?.target?.value);
  };
  return (
    <TextField
      size="small"
      className="bg-Secondary rounded-[4px] border-none "
      placeholder="What are you looking for?"
      onChange={searchHandler}
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
           
            border: "none", // Change the color to your desired color
        },
        
        "& .MuiOutlinedInput-root": {
            height:"31px !important",
            padding: "7px",
            border: "none ",
            borderRadius: "4px !important"
            // Change the color to your desired color
           // Change the background color to red
        },
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline":{
            borderStyle:"none"
        }
      }}
      InputProps={{
        style: { borderRadius: "15px" },
        endAdornment: (
          <InputAdornment position="start">
            <IoSearchOutline />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
