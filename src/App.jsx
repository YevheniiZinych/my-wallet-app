import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";

const WALLET_KEY = import.meta.env.VITE_API_KEY;

const chains = [arbitrum, mainnet, polygon];
const projectId = WALLET_KEY;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const { address } = ethereumClient.getAccount();

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <HomePage ethereumClient={ethereumClient} />
      </WagmiConfig>

      <Toaster />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
