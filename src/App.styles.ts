import styled from 'styled-components';
import StarsImage from './img/stars.png';
import LogoImg from './img/ss3dsitelogo.png';

// background
export const FrameStyle = styled.div`
  display: flex;
  background-color: #1a1f27;
  background-image: linear-gradient(#49495c, #231d33);
  flex-direction: column;
  height: 100vh;
  font-family: 'RobotoFont';
`;

// off

export const BGimage = styled.div`
  background-image: url(${StarsImage});
`;
export const ContentFrame = styled.div`
  display: flex;
  justify-content: top;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;
// GENERIC TEXT CONTAINER
export const Gtext = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

// TOP NAVBAR
export const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
  justify-content: center;
  background-color: #b94949;
  box-shadow: 0.4rem 0rem 0.5rem rgba(0, 0, 0, 0.5);
`;

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  &:hover {
    text-shadow: 0rem 0rem 0.5rem white;
    color: white;
    background-color: #381c1c;
  }
  &:active {
    background-color: #db6363;
  }
`;

export const NavBarText = styled.div`
  display: flex;
  color: white;
  height: 100%;
  align-items: center;
  user-select: none;
`;

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  overflow-y: scroll;
  padding-top: 3rem;
`;

export const Logo = styled.div`
  flex-grow: 1;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 60%;
  min-height: 80px;
  align-self: center;
  background-position: center;
`;

export const PageLoader = styled.div`
  flex-grow: 2;
  height: 100%;
  width: 60%;
  align-self: center;
  justify-content: center;
  color: #bbb9c9;
`;
