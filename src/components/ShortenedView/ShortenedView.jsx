import { useState } from "react";
import { ethers, formatEther } from "ethers";
import { toast } from "react-hot-toast";
import { Wrapper, Inner } from "./ShortenedView.styled";
import { CopyButton } from "../CopyButton/CopyButton";

export const ShortenedView = ({ address = "", onConnect }) => {
  const [currentBalance, setCurrentBalance] = useState("");
  const shortenedAddress = address.slice(0, 6) + "....." + address.slice(-4);

  const getUserBalance = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      setCurrentBalance(Number(formatEther(balance)).toFixed(3));
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (address) {
    getUserBalance();
  }

  return (
    <Wrapper>
      <p
        style={{
          margin: 0,
          height: 18,
        }}
      >
        {currentBalance}
      </p>
      <Inner>
        <p
          onClick={() => onConnect()}
          style={{
            cursor: "pointer",
            marginLeft: 10,
          }}
        >
          {shortenedAddress}
        </p>
        <CopyButton address={address} />
      </Inner>
    </Wrapper>
  );
};
