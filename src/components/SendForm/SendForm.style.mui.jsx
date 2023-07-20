import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StyledForm = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  width: 350,
  height: 350,
  marginTop: 150,

  backgroundColor: "#f1f1f1",
}));
