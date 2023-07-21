import { parseEther } from "ethers";
import Button from "@mui/material/Button";

export const SendTransaction = ({ currentAccount, accountValue, amount }) => {
  console.log(typeof amount);
  const parseAmount = parseEther(amount);

  let params = [
    {
      from: currentAccount,
      to: accountValue,
      gas: Number(21000).toString(16),
      gasPrice: Number(2500000).toString(16),
      value: Number().toString(29),
    },
  ];

  const sendTransaction = async () => {
    try {
      let result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Button onClick={sendTransaction} variant="outlined" type="submit">
      Send
    </Button>
  );
};
