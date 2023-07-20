import { Header, ConnectBtn, Logo } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <Header>
      <Logo>CryptoGod</Logo>
      <ConnectBtn>Connect wallet</ConnectBtn>
    </Header>
  );
};
