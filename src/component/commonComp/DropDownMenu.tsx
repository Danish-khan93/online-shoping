import * as React from "react";
import { MenuItem, Menu, Button } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [lang, setLang] = React.useState<"English" | "Urdu">("English");
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value :"English" | "Urdu" ) => {
    setAnchorEl(null);
    setLang(value);
  };

  return (
    <div>
      <Button
        className="text-BG"
        endIcon={open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {lang}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
       <MenuItem onClick={() => handleClose("English")}>English</MenuItem>
        <MenuItem onClick={() => handleClose("Urdu")}>Urdu</MenuItem>
      </Menu>
    </div>
  );
}

