import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const Inner = styled.div`
  display: flex;
`;
