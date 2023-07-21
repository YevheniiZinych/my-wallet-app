import { ShortenedView } from "../ShortenedView/ShortenedView";
import { Header, ConnectBtn, Logo } from "./NavBar.styled";

export const NavBar = ({
  connectWallet,
  currentAccount,
  currentBalance,
  errorMessage,
}) => {
  return (
    <Header>
      <Logo>CryptoGod</Logo>
      {currentAccount ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "400px",
          }}
        >
          <ShortenedView address={currentAccount} />
          <p>{currentBalance}</p>
        </div>
      ) : (
        <ConnectBtn onClick={connectWallet}>Connect wallet</ConnectBtn>
      )}

      {errorMessage && <p>{errorMessage}</p>}
    </Header>
  );
};
