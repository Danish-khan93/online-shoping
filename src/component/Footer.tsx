import React from "react";
import { Box, Typography } from "@mui/material";
import barCode from "/public/assets/images/barcode.png"
import Image from "next/image";
const link1 = [
  { link: "#", name: "My Account" },
  { link: "#", name: "Login / Register" },
  { link: "#", name: "Cart" },
  { link: "#", name: "Wishlist" },
  { link: "#", name: "Shop" },
];
const link2 = [
  { link: "#", name: "Privacy Policy" },
  { link: "#", name: "Terms Of Use" },
  { link: "#", name: "FAQ" },
  { link: "#", name: "Contact" },
];

const Footer = () => {
  return (
    <Box className="bg-TEXT1 text-[#fff] flex justify-evenly md:flex-nowrap flex-wrap gap-[20px] items-start px-3 md:py-[80px] py-[30px]">
      <Box className="flex flex-col gap-3 w-[100%]">
        <Typography className="text-[28px] font-semibold">Logo</Typography>
        <Typography className="text-[18px] font-semibold">Subscribe</Typography>
        <Typography>Get 10% off your first order</Typography>
      </Box>

      <Box className="flex justify-center flex-col gap-3 w-[100%]">
        <Typography className="text-[18px] font-semibold">Support</Typography>
        <Typography>111 Bijoy sarani, Dhaka.</Typography>
        <Typography>exclusive@gmail.com</Typography>
        <Typography>+88015-88888-9999</Typography>
      </Box>

      <Box className="flex justify-center flex-col gap-3 w-[100%]">
        <Typography className="text-[18px] font-semibold">Account</Typography>
        {link1.map((value) => {
          return <Typography key={value?.name}>{value?.name}</Typography>;
        })}
      </Box>
      <Box className="flex justify-center flex-col gap-3 w-[100%]">
        <Typography className="text-[18px] font-semibold">
          Quick Link
        </Typography>
        {link2.map((value) => {
          return <Typography key={value?.name}>{value?.name}</Typography>;
        })}
      </Box>
      <Box className="flex justify-center flex-col gap-3 w-[100%]">
        <Typography className="text-[18px] font-semibold">
          Download App
        </Typography>
        <Typography className="text-[10px]">
          Save $3 with App New User Only
        </Typography>
        <Image src={barCode} alt="img"/>
      </Box>
    </Box>
  );
};

export default Footer;
