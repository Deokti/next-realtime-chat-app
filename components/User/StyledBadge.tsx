import styled from "@emotion/styled";
import { Badge } from "@mui/material";

export const StyledBadge = styled(Badge)(({ color }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: color === "success" ? "#00BA88" : "#F17C76",
    color: color === "success" ? "#00BA88" : "#F17C76",
    boxShadow: `0 0 0 2px #fff`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation:
        color === "success" ? "ripple 1.2s infinite ease-in-out" : "none",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
