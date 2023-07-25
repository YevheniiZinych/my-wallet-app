import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 2;
  left: 3;
  width: 99.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  /* overflow: hidden; */
  transition: all 0.3s linear;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (min-width: 320px) and (max-width: 450px) {
    height: 100px;
    justify-content: space-between;
  }
`;

export const LogoName = styled.h2`
  margin-left: 10px;
  color: #635e5d;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    font-size: 18px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  transition: all 0.3s linear;
  transform: ${({ account }) =>
    account ? "translateX(0)" : "translateX(-120%)"};

  width: 210px;
  height: 35px;
  margin-right: 10px;

  border: 1px solid #635e5d;
  border-radius: 10px;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    flex-direction: column;
    justify-content: space-around;
    gap: 5px;
    width: 140px;
    height: 60px;
  }
`;

export const InformContainer = styled.div`
  position: relative;
  right: 0;
  top: 5px;
  width: 215px;
  height: 45px;
  overflow: hidden;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    height: 80px;
    width: 150px;
  }
`;
