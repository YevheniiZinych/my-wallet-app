import { useCallback, useState } from "react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import { useAccount } from "wagmi";
import { ethers, formatEther } from "ethers";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains } from "wagmi";
// import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { toast } from "react-hot-toast";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { animateOptions } from "../../components/options/AnimateBackOptions/AnimateBackOptions";
import { NavBar } from "../../components/NavBar/NavBar";
import { SendForm } from "../../components/SendForm/SendForm";
import { Container } from "./HomePage.styled";
import { RepoLink } from "./HomePage.styled";

// const WALLET_KEY = import.meta.env.VITE_API_KEY;

// const chains = [arbitrum, mainnet, polygon];
// const projectId = WALLET_KEY;

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient,
// });
// const ethereumClient = new EthereumClient(wagmiConfig, chains);

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

export const HomePage = () => {
  // const [currentBalance, setCurrentBalance] = useState("");
  // const { address } = useAccount();

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
      <WagmiConfig config={config}>
        <Container>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={animateOptions}
          />

          <NavBar />
          <SendForm />

          <RepoLink
            href="https://github.com/YevheniiZinych/my-wallet-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://github.com/YevheniiZinych/my-wallet-app
          </RepoLink>
        </Container>
      </WagmiConfig>
      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  );
};
