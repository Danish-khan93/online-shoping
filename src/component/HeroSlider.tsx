"use client";
// import Swiper core and required modules
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import iphoneLogo from "/public/assets/images/iphoneLogo.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      className="w-[80%] h-[350px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
    //   pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Box className="relative bg-TEXT1 w-full flex justify-evenly items-center py-[10px]">
          <Box>
            <Box className="flex items-center gap-5">
              <Image
                src={iphoneLogo}
                alt="iphone logo"
                width={50}
                height={50}
              />
              <Typography className="text-[#fff] text-[16px]">iphone 14 Series</Typography>
            </Box>
            <Box>
              <Typography className="text-[#fff] font-bold text-[34px]">
                Up to 10%
              </Typography>
              <Typography className="text-[#fff] font-bold text-[34px]">
                off Voucher
              </Typography>
            </Box>
            <Box>
              <Link className="text-[#fff] text-[12px] underline underline-offset-4" href={"#"}>Shop Now </Link>
            </Box>
          </Box>
          <Box>
            <Image
              src="https://picsum.photos/id/1/500/500"
              alt="slide"
              width={500}
              height={500}
              className="w-full"
            />
          </Box>
          <Box className="absolute top-[224px] w-full text-center">
            <Box className="swiper-pagination" />
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box className="relative bg-TEXT1 w-full flex justify-evenly items-center py-[10px]">
          <Box>
            <Box className="flex items-center gap-5">
              <Image
                src={iphoneLogo}
                alt="iphone logo"
                width={50}
                height={50}
              />
              <Typography className="text-[#fff] text-[16px]">iphone 14 Series</Typography>
            </Box>
            <Box>
              <Typography className="text-[#fff] font-bold text-[34px]">
                Up to 10%
              </Typography>
              <Typography className="text-[#fff] font-bold text-[34px]">
                off Voucher
              </Typography>
            </Box>
            <Box>
              <Link className="text-[#fff] text-[12px] underline underline-offset-4" href={"#"}>Shop Now </Link>
            </Box>
          </Box>
          <Box>
            <Image
              src="https://picsum.photos/id/1/500/500"
              alt="slide"
              width={500}
              height={500}
              className="w-full"
            />
          </Box>
          <Box className="absolute top-[224px] w-full text-center">
            <Box className="swiper-pagination" />
          </Box>
        </Box>
      </SwiperSlide>
      {/* Additional slides go here */}
    </Swiper>
  );
};

export default HeroSlider;
