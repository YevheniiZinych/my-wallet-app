import { ThemeProvider } from "@mui/material";
import { useWeb3Modal } from "@web3modal/react";
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
import { theme } from "../../config/breakpoints";

export const NavBar = ({
  // currentAccount: address,
  currentBalance,
  ethereumClient,
}) => {
  const { open, close } = useWeb3Modal();

  const { address } = ethereumClient.getAccount();

  const onOpen = () => {
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
