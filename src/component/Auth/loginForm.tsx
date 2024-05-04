"use client";
import React from "react";
import { ComTextField } from "../index";
import { useForm } from "react-hook-form";
import { nameRules } from "@/rules/authRules";
type FORMTYPE = {
  name: string;
  email: string;
  password: string;
};

const loginForm = () => {
  const { control, handleSubmit } = useForm<FORMTYPE>({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = (data: FORMTYPE) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};

export default loginForm;
