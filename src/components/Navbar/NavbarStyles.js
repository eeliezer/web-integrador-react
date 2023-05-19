import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  height: 100px;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  padding: 1rem 4rem;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

export const LogoImg = styled.img`
  width: 300px;
  height: auto;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: var(--button-bg-white);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#ED1703' : '#ED1703')};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  gap: 5px;
`;

export const CartContainerDiv = styled.div`
  display: flex;
  margin-right: 25px;
  span {
    color: var(--button-bg-red);
  }
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 15px;
  span {
    position: absolute;
    top: -10px;
    left: 12px;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }
`;

export const UserNavStyled = styled.div`
  cursor: pointer;
  span {
    color: var(--button-bg-red);
    font-size: 1rem;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const NavbarBuscador = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 10px;
    color: var(--button-bg-red);
  }
`;

export const NavbarFormStyled = styled.form`
  display: flex;
  button {
    background: var(--button-bg-red);
    color: #ffffff;
    font-weight: 600;
  }
`;

export const NavbarSearchBarStyled = styled.input`
  background-color: var(--button-bg-red);
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  width: 250px;
  color: white;
  font-weight: 600;
  font-family: Quantico, sans-serif;
`;

export const IconWrapperStyled = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  position: relative;
  left: -2rem;
  top: 0.5rem;
`;

export const HeroBtnStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;
