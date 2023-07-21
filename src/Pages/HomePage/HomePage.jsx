import { useState } from "react";
import { ethers, formatEther } from "ethers";

import { NavBar } from "../../components/NavBar/NavBar";
import { SendForm } from "../../components/SendForm/SendForm";
import { Container } from "./HomePage.styled";

export const HomePage = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let signer = null;
  let provider = null;

  const connectWallet = async () => {
    if (window.ethereum == null) {
      setErrorMessage("MetaMask not installed");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);

      signer = await provider.getSigner();
      getAccountPath(signer.address);
    }
  };

  const getAccountPath = (accountName) => {
    setCurrentAccount(accountName);
    getUserBalance(accountName);
  };

  const getUserBalance = async (accountAddress) => {
    try {
      const balance = await provider.getBalance(accountAddress);

      setCurrentBalance(Number(formatEther(balance)).toFixed(3));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <Container>
      <SendForm currentAccount={currentAccount} />
      <NavBar
        connectWallet={connectWallet}
        currentAccount={currentAccount}
        currentBalance={currentBalance}
        errorMessage={errorMessage}
      />
    </Container>
  );
};
