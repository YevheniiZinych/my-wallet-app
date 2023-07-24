import { useState } from "react";
import { useCallback } from "react";
import { toast } from "react-hot-toast";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { ethers, formatEther } from "ethers";
import { animateOptions } from "../../components/options/AnimateBackOptions/AnimateBackOptions";
import { NavBar } from "../../components/NavBar/NavBar";
import { SendForm } from "../../components/SendForm/SendForm";
import { Container } from "./HomePage.styled";
import { RepoLink } from "./HomePage.styled";

export const HomePage = ({ ethereumClient }) => {
  const [currentBalance, setCurrentBalance] = useState("");

  console.log(ethereumClient);

  const { address } = ethereumClient.getAccount();

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

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Container>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={animateOptions}
        />

        <NavBar address={address} currentBalance={currentBalance} />
        <SendForm />

        <RepoLink
          href="https://github.com/YevheniiZinych/my-wallet-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://github.com/YevheniiZinych/my-wallet-app
        </RepoLink>
      </Container>
    </>
  );
};
