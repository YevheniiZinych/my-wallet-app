import { useState, useCallback } from "react";
import { ethers, formatEther, getAddress } from "ethers";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Toaster, toast } from "react-hot-toast";
import { animateOptions } from "../../components/options/AnimateBackOptions/AnimateBackOptions";
import { NavBar } from "../../components/NavBar/NavBar";
import { SendForm } from "../../components/SendForm/SendForm";
import { Container } from "./HomePage.styled";
import { MetaMaskSDK } from "@metamask/sdk";
import detectEthereumProvider from "@metamask/detect-provider";

export const HomePage = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");

  let signer = null;
  let provider = null;

  const connectWallet = async () => {
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
    }
    // new MetaMaskSDK({
    //   useDeeplink: true,
    //   communicationLayerPreference: "socket",
    // });
    // if (window.ethereum === null) {
    //   toast.error("MetaMask not installed");
    //   // provider = ethers.getDefaultProvider();
    // } else {
    //   try {
    //     provider = new ethers.BrowserProvider(window.ethereum);
    //     signer = await provider.getSigner();
    //     getAccountPath(signer.address);
    //     toast.success("Connecting successfully");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  const handleEthereum = async () => {
    if (window.ethereum) {
      try {
        // Request account access from the user
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Create an ethers.js provider using MetaMask's provider
        const provider = new ethers.BrowserProvider(window.ethereum);

        // Get the signer (account)
        await provider
          .getSigner()
          .then((result) => setCurrentAccount(result.address));

        toast.success("Connected account address");
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      toast.error("MetaMask not detected in the mobile browser.");
    }
  };

  // const connectWallet = async () => {
  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     console.log("MetaMask Here!");
  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((result) => {
  //         console.log(result);
  //         // setLogged(true);
  //         setCurrentAccount(getAddress(result[0]));
  //       })
  //       .catch((error) => {
  //         console.log("Could not detect Account");
  //       });
  //   } else {
  //     console.log("Need to install MetaMask");
  //   }
  // };

  // const handleBalance = (currentAccount) => {
  //   window.ethereum
  //     .request({ method: "eth_getBalance", params: [currentAccount, "latest"] })
  //     .then((balance) => {
  //       setCurrentBalance(formatEther(balance));
  //     })
  //     .catch((error) => {
  //       console.log("Could not detect the Balance");
  //     });
  // };

  // handleBalance(currentAccount);

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
