import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const StyledForm = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  gap: "25px",

  background: "rgba(255, 255, 255, 0.6)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.34)",
  backdropFilter: "blur(4px)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  WebkitBackdropFilter: "blur(4px)",

  width: 350,
  height: 350,
  marginTop: 150,
}));
