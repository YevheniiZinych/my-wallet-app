import { useState } from "react";
import { ethers, formatEther } from "ethers";
import { ShortenedView } from "../ShortenedView/ShortenedView";
import { Header, ConnectBtn, Logo } from "./NavBar.styled";

export const NavBar = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
      console.log(balance);
      setCurrentBalance(Number(formatEther(balance)).toFixed(3));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Header>
      <Logo>CryptoGod</Logo>
      {currentAccount ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "400px",
          }}
        >
          <ShortenedView address={currentAccount} />
          <p>{currentBalance}</p>
        </div>
      ) : (
        <ConnectBtn onClick={connectWallet}>Connect wallet</ConnectBtn>
      )}

      {errorMessage && <p>{errorMessage}</p>}
    </Header>
  );
};
