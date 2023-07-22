import { useState, useCallback } from "react";
import { ethers, formatEther } from "ethers";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Toaster, toast } from "react-hot-toast";
import { animateOptions } from "../../components/options/AnimateBackOptions/AnimateBackOptions";
import { NavBar } from "../../components/NavBar/NavBar";
import { SendForm } from "../../components/SendForm/SendForm";
import { Container } from "./HomePage.styled";
import { MetaMaskSDK } from "@metamask/sdk";

export const HomePage = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");

  let signer = null;
  let provider = null;

  const connectWallet = async () => {
    new MetaMaskSDK({
      useDeeplink: false,
      communicationLayerPreference: "socket",
    });
    if (window.ethereum === null) {
      toast.error("MetaMask not installed");
      provider = ethers.getDefaultProvider();
    } else {
      try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        getAccountPath(signer.address);
        toast.success("Connecting successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const connectWallet = () => {
  //   const { ethereum } = window;
  //   if (ethereum && ethereum.isMetaMask) {
  //     console.log("Ethereum successfully detected!");
  //     // Access the decentralized web!
  //   } else {
  //     console.log("Please install MetaMask!");
  //   }
  // };

  const getAccountPath = (accountName) => {
    setCurrentAccount(accountName);
    getUserBalance(accountName);
  };

  const getUserBalance = async (accountAddress) => {
    try {
      const balance = await provider.getBalance(accountAddress);
      setCurrentBalance(Number(formatEther(balance)).toFixed(3));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={animateOptions}
      />
      <SendForm currentAccount={currentAccount} />
      <NavBar
        connectWallet={connectWallet}
        currentAccount={currentAccount}
        currentBalance={currentBalance}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
};
