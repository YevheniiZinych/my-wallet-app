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

export const NavBar = ({ address, currentBalance }) => {
  const { open } = useWeb3Modal();

  const onConnect = async () => {
    await open();
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
                onConnect={onConnect}
                address={address}
              />
              <CopyButton address={address} />
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
