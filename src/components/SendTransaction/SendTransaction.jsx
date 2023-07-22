import { parseEther } from "ethers";
import Button from "@mui/material/Button";

export const SendTransaction = ({ currentAccount, accountValue, amount }) => {
  const parseAmount = parseEther((amount = amount || "0"));

  let params = [
    {
      from: currentAccount,
      to: accountValue,
      gas: Number(21000).toString(16),
      gasPrice: Number(2500000).toString(16),
      value: Number(parseAmount).toString(29),
    },
  ];

  const sendTransaction = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Button
      sx={{
        width: 150,
      }}
      onClick={sendTransaction}
      variant="outlined"
      type="submit"
    >
      Send
    </Button>
  );
};
