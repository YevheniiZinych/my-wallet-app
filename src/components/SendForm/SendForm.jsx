import { useState } from "react";
import TextField from "@mui/material/TextField";
import { StyledForm } from "./SendForm.style.mui";
import { SendTransaction } from "../SendTransaction/SendTransaction";

export const SendForm = ({ currentAccount }) => {
  const [accountValue, setAccountValue] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "wallet_address":
        setAccountValue(e.target.value);
        break;
      case "amount":
        setAmount(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <StyledForm component="form" noValidate autoComplete="off">
      <TextField
        onChange={handleChange}
        value={accountValue}
        name="wallet_address"
        id="outlined-basic"
        label="Wallet address"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={amount}
        name="amount"
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        type="number"
      />
      <SendTransaction
        accountValue={accountValue}
        amount={amount}
        currentAccount={currentAccount}
      />
    </StyledForm>
  );
};
