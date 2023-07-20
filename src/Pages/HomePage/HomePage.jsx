import { NavBar } from "../../components/NavBar/NavBar";
import { SendForm } from "../../components/SendForm/SendForm";
import { Container } from "./HomePage.styled";
export const HomePage = () => {
  return (
    <Container>
      <SendForm />
      <NavBar />
    </Container>
  );
};
