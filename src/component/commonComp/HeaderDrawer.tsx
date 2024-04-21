import * as React from "react";
import { Box, Drawer, Button, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "@/constant/links";
import { NAVLINKSTYPE } from "@/types/navtypes";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import SearchField from "../SearchField";

export default function HeaderDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      danish
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        className="w-[100%]"
        sx={{
          "& .MuiPaper-root": {
            width: "80% !important",
          },
        }}
      >
        <Box className="px-[20px] ">
          <Box className="pt-[20px]">
            <Typography>Logo</Typography>
          </Box>
          <Box className="py-[20px]">
            <Divider />
          </Box>
          <Box>
            <SearchField />
          </Box>
          <Box className="py-[20px]">
            <Divider />
          </Box>
          <Box className="py-[20px] flex flex-col gap-[20px]">
            <Box>
              <Link href={"#"} className="text-[20px] font-semibold">
                <Typography className="flex items-center gap-[50px]">
                  <IoIosHeartEmpty className="w-[20px] h-[20px]" />
                  WishList
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link href={"#"} className="text-[20px] font-semibold">
                <Typography className="flex items-center gap-[50px]">
                  <BsCart3 className="w-[20px] h-[20px]" />
                  Cart
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className="py-[20px]">
            <Divider />
          </Box>
          <Box>
            {navLinks.map((value: NAVLINKSTYPE) => {
              return (
                <Typography className="py-[5px]">
                  <Link href={value?.link}>{value?.name}</Link>
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
