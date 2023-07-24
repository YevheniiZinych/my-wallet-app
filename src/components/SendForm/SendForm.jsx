import { useState } from "react";
import { parseEther } from "ethers";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useSendTransaction } from "wagmi";
import Button from "@mui/material/Button";
import { StyledForm } from "./SendForm.style.mui";
import { handleCheckPattern } from "../../utils/handleCheckPattern";

export const SendForm = () => {
  const [accountValue, setAccountValue] = useState("");
  const [amount, setAmount] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(false);

  const parseAmount = parseEther(amount || "0");

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: accountValue,
    value: parseAmount,
  });

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

  const sendTransactions = async () => {
    const result = handleCheckPattern(accountValue);
    setIsValidAddress(result);
    sendTransaction();

    setAccountValue("");
    setAmount("");
    setIsValidAddress(false);
  };

  const predUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledForm
        onSubmit={predUpdate}
        component="form"
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            onChange={handleChange}
            value={accountValue}
            name="wallet_address"
            id="outlined-basic"
            label="Wallet address"
            variant="outlined"
          />
          {isValidAddress && (
            <DoneAllIcon
              sx={{
                position: "absolute",
                marginTop: 1,
                marginLeft: 1,
                color: "green",
              }}
            />
          )}
        </div>

        <TextField
          onChange={handleChange}
          value={amount}
          name="amount"
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          type="number"
        />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            sx={{
              width: 150,
            }}
            onClick={sendTransactions}
            variant="outlined"
            type="submit"
          >
            Send
          </Button>
        )}
      </StyledForm>
    </>
  );
};
