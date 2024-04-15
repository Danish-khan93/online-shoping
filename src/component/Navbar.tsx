"use client";
import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { navLinks } from "@/constant/links";
import { NAVLINKSTYPE } from "@/types/navtypes";
import { SearchField } from "./";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { HeaderDrawer } from "./";
import Link from "next/link";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <AppBar position="static" className="bg-BG text-TEXT1">
      <Toolbar className="flex justify-between">
        <Box>
          <Typography>Logo</Typography>
        </Box>
        <Box className="flex gap-12">
          {navLinks.map((value: NAVLINKSTYPE) => {
            return (
              <Link
                className={clsx("text-para", {
                  "underline underline-offset-4": pathName === value?.link,
                })}
                key={value?.name}
                href={value?.link}
              >
                {value?.name}
              </Link>
            );
          })}
        </Box>

        <Box className="flex gap-12 items-center">
          <Box>
            <SearchField />
          </Box>
          <Box className="flex gap-8">
            <Link href={"#"} className="text-[20px] font-semibold">
              <IoIosHeartEmpty />
            </Link>
            <Link href={"#"} className="text-[20px] font-semibold">
              <BsCart3 />
            </Link>
          </Box>
        </Box>
        <Box>
          <HeaderDrawer />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
