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

export const NavBar = ({ currentAccount, currentBalance }) => {
  const { open, close } = useWeb3Modal();

  const openModal = () => {
    open();
  };

  return (
    <Header>
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
        <Inner account={currentAccount}>
          <p>{currentBalance}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ShortenedView address={currentAccount} />
            <CopyButton address={currentAccount} />
          </div>
        </Inner>
      </InformContainer>
    </Header>
  );
};
