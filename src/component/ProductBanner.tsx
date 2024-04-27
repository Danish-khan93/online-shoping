import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import heroImage from "/public/assets/images/heroimage.png";

const ProductBanner = () => {
  return (
    <Box className="bg-TEXT1 py-[50px] px-[20px] flex justify-around items-center flex-col md:flex-row gap-5">
      <Box className="sm-flex sm-flex-col gap-8 flex-row" >
        <Box>
          <Typography className="text-[#00FF66] font-semibold text-[20px]">
            Categories
          </Typography>
        </Box>
        <Box>
          <Typography className="text-[#FFF] font-semibold text-[38px]">
            Enhance Your
          </Typography>
          <Typography className="text-[#FFF] font-semibold text-[38px]">
          Music Experience
          </Typography>
        </Box>

        <Box className="flex gap-5 items-center flex-wrap">
          <Box className="bg-[#fff] w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
            <Typography className="text-[#000] font-semibold text-[20px]">
              32
            </Typography>
            <Typography className="text-[#000] font-semibold text-[20px]">
              Hours
            </Typography>
          </Box>
          <Box className="bg-[#fff] w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
            <Typography className="text-[#000] font-semibold text-[20px]">
              32
            </Typography>
            <Typography className="text-[#000] font-semibold text-[20px]">
              Hours
            </Typography>
          </Box>
          <Box className="bg-[#fff] w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
            <Typography className="text-[#000] font-semibold text-[20px]">
              32
            </Typography>
            <Typography className="text-[#000] font-semibold text-[20px]">
              Hours
            </Typography>
          </Box>
          <Box className="bg-[#fff] w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
            <Typography className="text-[#000] font-semibold text-[20px]">
              32
            </Typography>
            <Typography className="text-[#000] font-semibold text-[20px]">
              Hours
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Box>
      <Box>
        <Box>
          <Image
            src={heroImage}
            alt="image"
            className="drop-shadow-[40px_30px_55px_rgba(255,255,255,0.25)]"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBanner;
