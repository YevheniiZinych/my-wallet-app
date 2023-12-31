import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const ConnectBtn = styled(Button)(({ account, theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  color: "#635e5d",
  border: "1px solid #635e5d",
  transition: "all 0.3s linear",

  transform: account ? "translateX(200%)" : "translateX(0)",

  "&:hover": {
    border: "2px solid #342f2e",
    color: "#342f2e",
    transition: "all 0.1s linear",
  },

  marginRight: 10,

  [theme.breakpoints.between(320, 400)]: {
    height: "60px",
    top: 4,
  },
}));
