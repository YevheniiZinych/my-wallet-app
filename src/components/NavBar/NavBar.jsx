import { ThemeProvider } from "@mui/material";
import { ShortenedView } from "../ShortenedView/ShortenedView";
import {
  Header,
  InformContainer,
  Inner,
  LogoName,
  LogoWrapper,
} from "./NavBar.styled";
import { ConnectBtn } from "./NavBar.style.mui";
import { CopyButton } from "../CopyButton/CopyButton";
import logoImg from "../../images/cripto-logo.png";
import { useWeb3Modal } from "@web3modal/react";
import { theme } from "../../config/breakpoints";

export const NavBar = ({ currentAccount, currentBalance }) => {
  const { open, close } = useWeb3Modal();
  console.log(currentAccount);
  const openModal = () => {
    open();
  };

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
          {currentAccount ? (
            <Inner account={currentAccount}>
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
                <ShortenedView openModal={openModal} address={currentAccount} />
                <CopyButton address={currentAccount} />
              </div>
            </Inner>
          ) : (
            <ConnectBtn
              account={currentAccount}
              onClick={() => {
                openModal();
              }}
              variant="outlined"
              type="button"
            >
              Connect wallet
            </ConnectBtn>
          )}
        </InformContainer>
      </ThemeProvider>
    </Header>
  );
};
