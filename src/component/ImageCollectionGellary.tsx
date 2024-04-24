import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import gellary1 from "/public/assets/images/gellary1.png";
import gellary2 from "/public/assets/images/gellary2.png";
import gellary3 from "/public/assets/images/gellary3.png";
import gellary4 from "/public/assets/images/gellary4.png";
const ImageCollectionGellary = () => {
  return (
    <Box className="w-[100%] h-[600px] sm:flex sm:justify-between md:flex-row flex-col hidden my-[50px]">
      <Box className="text-[#fff] w-[30%] bg-TEXT1 flex md:justify-center md:items-end justify-end items-end rounded-md relative">
        <Box className="absolute bottom-0 left-20">
          <Typography className="text-[#fff] transition-transform duration-300 transform translate-y-full hover:-translate-y-0">
            danish
          </Typography>
        </Box>
        <Image src={gellary1} alt="image" className="w-auto h-auto" />
      </Box>

      <Box className="text-[#fff] w-[30%] flex flex-col justify-between gap-4 ">
        <Box className="text-[#fff] bg-TEXT1 rounded-md flex justify-end">
          <Image src={gellary2} alt="image" />
        </Box>
        <Box className="flex md:justify-between  justify-around ">
          <Box className="text-[#fff] bg-TEXT1 md:py-[20px] p-[30px] rounded-md">
            <Image src={gellary3} alt="image" />
          </Box>
          <Box className="text-[#fff] bg-TEXT1 md:py-[20px] p-[30px] rounded-md">
            <Image src={gellary4} alt="image" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCollectionGellary;
