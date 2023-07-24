import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import { ShortenedView } from "../ShortenedView/ShortenedView";
import {
  Header,
  InformContainer,
  Inner,
  LogoName,
  LogoWrapper,
} from "./NavBar.styled";
import { toast } from "react-hot-toast";
import { ConnectBtn } from "./NavBar.style.mui";
import { CopyButton } from "../CopyButton/CopyButton";
import logoImg from "../../images/cripto-logo.png";
import { useWeb3Modal } from "@web3modal/react";
import { theme } from "../../config/breakpoints";

// import { useAccount, useConnect, useDisconnect } from "wagmi";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { ethers, formatEther } from "ethers";

export const NavBar = ({ address = "", currentBalance }) => {
  // const [currentBalance, setCurrentBalance] = useState("");
  const { open } = useWeb3Modal();

  const onOpen = () => {
    open();
  };

  // const { address } = useAccount();
  // const { connect } = useConnect({
  //   connector: new InjectedConnector(),
  // });
  // const { disconnect } = useDisconnect();

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

  return (
    <Header>
      <ThemeProvider theme={theme}>
        <LogoWrapper>
          <img
            style={{
              height: 30,
              borderRadius: 50,
            }}
            src={logoImg}
            alt="Logo"
          ></img>
          <LogoName>CryptoShuttle</LogoName>
        </LogoWrapper>

        <InformContainer>
          <Inner account={address}>
            <p
              style={{
                margin: 0,
              }}
            >
              {currentBalance}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ShortenedView
                close={close}
                onConnect={onOpen}
                address={address}
              />
              <CopyButton address={address} />
            </div>
          </Inner>

          <ConnectBtn
            account={address}
            onClick={onOpen}
            variant="outlined"
            type="button"
          >
            Connect wallet
          </ConnectBtn>
        </InformContainer>
      </ThemeProvider>
    </Header>
  );
};
