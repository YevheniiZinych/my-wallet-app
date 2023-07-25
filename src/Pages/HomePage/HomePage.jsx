import { useCallback } from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { animateOptions } from "../../components/options/AnimateBackOptions/AnimateBackOptions";
import { NavBar } from "../../components/NavBar/NavBar";
import { SendForm } from "../../components/SendForm/SendForm";
import { Container } from "./HomePage.styled";
import { RepoLink } from "./HomePage.styled";

const WALLET_KEY = import.meta.env.VITE_API_KEY;

export const HomePage = () => {
  const chains = [arbitrum, mainnet, polygon];
  const projectId = WALLET_KEY;

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  const { address } = ethereumClient.getAccount();

  // const getUserBalance = async () => {
  //   try {
  //     const provider = new ethers.BrowserProvider(window.ethereum);
  //     const balance = await provider.getBalance(address);
  //     setCurrentBalance(Number(formatEther(balance)).toFixed(3));
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  // if (address) {
  //   getUserBalance();
  // }

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Container>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={animateOptions}
          />
          <SendForm />
          <NavBar ethereumClient={ethereumClient} currentAccount={address} />
          <RepoLink
            href="https://github.com/YevheniiZinych/my-wallet-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://github.com/YevheniiZinych/my-wallet-app
          </RepoLink>
        </Container>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};
