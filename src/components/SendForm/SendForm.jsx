import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { StyledForm } from "./SendForm.style.mui";

export const SendForm = () => {
  return (
    <StyledForm
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Wallet address"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Amount" variant="outlined" />
      <Button variant="outlined">Send</Button>
    </StyledForm>
  );
};
