import { useState } from "react";
import { parseEther } from "ethers";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useSendTransaction } from "wagmi";
import { toast } from "react-hot-toast";
import Button from "@mui/material/Button";
import sha3 from "js-sha3";
import { StyledForm } from "./SendForm.style.mui";

export const SendForm = () => {
  const [accountValue, setAccountValue] = useState("");
  const [amount, setAmount] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(false);
  const pattern = /^0x[0-9A-Fa-f]{40}$/;

  const parseAmount = parseEther(amount || "0");

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: accountValue,
    value: parseAmount,
  });

  const ChecksumChecker = () => {
    try {
      const addressWithoutPrefix = accountValue
        .replace(/^0x/, "")
        .toLowerCase();

      const hash = sha3.keccak256(addressWithoutPrefix);

      const checksumAddress =
        "0x" +
        addressWithoutPrefix
          .split("")
          .map((char, index) => {
            if (parseInt(hash[index], 16) >= 8) {
              return char.toUpperCase();
            } else {
              return char;
            }
          })
          .join("");

      setIsValidAddress(accountValue === checksumAddress);
    } catch (error) {
      console.log("Error checking Checksum:", error);
      setIsValidAddress(false);
    }
  };

  const handleCheckPattern = () => {
    if (pattern.test(accountValue)) {
      toast.success("Address correct");
    } else {
      toast.error(
        "Invalid address. Address should start from 0x and have 40 symbols"
      );
    }

    ChecksumChecker();
  };

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
    handleCheckPattern();

    sendTransaction();

    if (isSuccess) {
      setAccountValue("");
      setAmount("");
      setIsValidAddress(false);
    }
  };

  const predUpdate = (e) => {
    e.preventDefault();
  };

  return (
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
  );
};
