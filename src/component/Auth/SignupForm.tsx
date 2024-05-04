"use client";
import React from "react";
import { ComTextField, ComButton } from "../index";
import { useForm } from "react-hook-form";
import { nameRules } from "../../rules/authRules";
import { Box, Typography } from "@mui/material";
type FORMTYPE = {
  name: string;
  email: string;
  password: string;
};

const SignupForm = () => {
  const { control, handleSubmit } = useForm<FORMTYPE>({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = (data: FORMTYPE) => {
    console.log(data);
  };
  return (
    <Box className= 'flex justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-5 h-screen justify-center"
      >
        <Box>
          <Typography className="font-semibold text-[32px] text-[#000]">
            Create an account
          </Typography>
          <Typography className="font-normal text-[20px] text-[#000]">
            Enter your details below
          </Typography>
        </Box>
        <ComTextField
          control={control}
          rules={nameRules}
          placeholder="enter your name"
          type="text"
          name="name"
        />
        <ComTextField
          control={control}
          rules={nameRules}
          placeholder="enter your email"
          type="email"
          name="email"
        />
        <ComTextField
          control={control}
          rules={nameRules}
          placeholder="enter your password"
          type="password"
          name="password"
        />
        <ComButton children={"Create Account"} type="submit" />
      </form>
    </Box>
  );
};

export default SignupForm;
