"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { DropDownMenu } from "./";
const Header = () => {
  return (
    <Box
    className="w-full py-[15px] bg-TEXT1 text-BG flex items-center justify-center px-[50px]"
    //  className="py-[15px] bg-TEXT1 text-BG flex items-center sm:flex-row sm:justify-around sm:px-[30px] flex-col sm:items-center justify-between px-[0px]"
    >
      <Box className="grow">
        <Typography className="text-para text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            href="#"
            className="px-5 underline underline-offset-4 font-semibold"
          >
            shopNow
          </Link>
        </Typography>
      </Box>
      <Box className="hidden sm:flex">
        <DropDownMenu />
      </Box>
    </Box>
  );
};

export default Header;
