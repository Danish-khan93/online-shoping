import React from "react";
import { Button } from "@mui/material";
type Props = {
  children: string;
  type: "button" | "reset" | "submit" | undefined;
  click?: () => {} | any;
};

const ComButton = ({ children, type, click }: Props) => {
  return (
    <Button type={type} onClick={click} className="py-[16px] px-[40px] bg-Secondary2 hover:bg-Secondary2  text-[#fff] font-semibold">
      {children}
    </Button>
  );
};

export default ComButton;
