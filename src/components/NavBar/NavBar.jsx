import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { useWeb3Modal } from "@web3modal/react";
import { ethers, formatEther } from "ethers";
import { toast } from "react-hot-toast";
import { ShortenedView } from "../ShortenedView/ShortenedView";
import {
  Header,
  InformContainer,
  Inner,
  LogoName,
  LogoWrapper,
} from "./NavBar.styled";
import { ConnectBtn } from "./NavBar.style.mui";
import logoImg from "../../images/cripto-logo.png";
import { theme } from "../../config/breakpoints";

export const NavBar = ({ currentBalance, ethereumClient }) => {
  const { open, close } = useWeb3Modal();

  const { address } = ethereumClient.getAccount();

  const onOpen = () => {
    open();
  };

  const { address } = ethereumClient.getAccount();

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
            {/* <p
              style={{
                margin: 0,
              }}
            >
              {currentBalance}
            </p> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ShortenedView onConnect={onConnect} address={address} />
            </div>
          </Inner>

          <ConnectBtn
            account={address}
            onClick={onConnect}
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
