import React from "react";
import { Box } from "@mui/material";
import gellary1 from "/public/assets/images/gellary1.png";
import gellary2 from "/public/assets/images/gellary2.png";
import gellary3 from "/public/assets/images/gellary3.png";
import gellary4 from "/public/assets/images/gellary4.png";
const ImageCollectionGellary = () => {
  return (
    <Box className="w-[80%] px-auto h-[300px] flex justify-around bg-gray-950 ">
      <Box className="bg-TEXT1" 
      sx={{
        background:`url(${gellary1})`
      }}

      ></Box>
      <Box>
        <Box className="bg-TEXT1"></Box>
        <Box className="flex">
          <Box className="bg-TEXT1"></Box>
          <Box className="bg-TEXT1"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCollectionGellary;
