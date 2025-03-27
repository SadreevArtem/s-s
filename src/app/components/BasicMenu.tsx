"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import Link from "next/link";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href="" color="inherit">
          Solutions
        </Link>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMouseLeave}
          MenuListProps={{
            onMouseLeave: handleMouseLeave,
            "aria-labelledby": "basic-button",
          }} // Закрывает при уходе мыши
        >
          <MenuItem onClick={handleMouseLeave}>Profile</MenuItem>
          <MenuItem onClick={handleMouseLeave}>My account</MenuItem>
          <MenuItem onClick={handleMouseLeave}>Logout</MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
