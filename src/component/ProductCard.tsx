"use client"
import React from "react";
import { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
const ProductCard = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <Box>
      <Box
        className="w-[270px] h-[250px]"
        sx={{
          background: "url(https://picsum.photos/id/1/270/250)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box className="py-[12px]">
        <Typography className="text-semibold text-TEXT1 text-[16px]">Product name</Typography>
        <Box className ="flex gap-8 my-[10px]">
        <Typography className="text-Secondary2">new price</Typography>
        <Typography className="text-TEXT3 line-through">-old price</Typography>

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
