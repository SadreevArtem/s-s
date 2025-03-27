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
          Products
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
          <MenuItem onClick={handleMouseLeave}>
            <Link href="/marine-hoses">Marine hoses</Link>
          </MenuItem>
          <MenuItem onClick={handleMouseLeave}>
            <Link href="/offshore-chains">Offshore chains</Link>
          </MenuItem>
          <MenuItem onClick={handleMouseLeave}>
            <Link href="/moorings">Moorings</Link>
          </MenuItem>
          <MenuItem onClick={handleMouseLeave}>
            <Link href="/marine-winches">Marine winches</Link>
          </MenuItem>
          <MenuItem onClick={handleMouseLeave}>
            <Link href="/hev">HEV</Link>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
