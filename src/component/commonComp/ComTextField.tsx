import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
type Props = {
  name: string;
  control: any;
  rules: any;
  placeholder: string;
  type: string;
};

const ComTextField = ({ name, control, rules, placeholder, type }: Props) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => {
        return (
          <TextField
            placeholder={placeholder}
            type={type}
            error={!!error}
            onChange={onChange}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

export default ComTextField;
