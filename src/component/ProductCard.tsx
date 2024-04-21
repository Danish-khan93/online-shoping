"use client";
import React from "react";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { Box, Typography, Rating, IconButton } from "@mui/material";
const ProductCard = () => {
  const [value, setValue] = useState<number | null>(2);


// wishlist
const addToWishList = () =>{
  console.log("wish list item add");
  
}
// wishlist

  return (
    <Box>
      <Box
        className="w-[270px] h-[250px] flex justify-between p-[10px]"
        sx={{
          background: "url(https://picsum.photos/id/1/270/250)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box className="text-BG bg-Secondary2 rounded-md flex justify-center items-center p-[5px] h-[30px]">
          <Typography>discount</Typography>
        </Box>
        <Box className= 'flex flex-col gap-5'>
          <Box className="bg-[#fff] w-[30px] h-[30px] rounded-[50%] flex justify-center">
            <IconButton onClick={addToWishList}>
              <IoIosHeartEmpty className="text-[#000]" />
            </IconButton>
          </Box>
          <Box className="bg-[#fff] w-[30px] h-[30px] rounded-[50%] flex justify-center">
            <IconButton>
              <LuEye className="text-[#000]" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className="py-[12px]">
        <Typography className="text-semibold text-TEXT1 text-[16px]">
          Product name
        </Typography>
        <Box className="flex gap-8 my-[10px]">
          <Typography className="text-Secondary2">new price</Typography>
          <Typography className="text-TEXT3 line-through">
            -old price
          </Typography>
        </Box>

        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
