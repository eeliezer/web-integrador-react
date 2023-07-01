import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: var(--button-bg-white);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 50px 20px;
  width: 450px;
  top: 100px;
  right: 0px;
  z-index: 98;
  border-radius: 1rem 0px 0px 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
  color: var(--button-bg-red);
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
  border: 0;
  border-top: 0.15rem solid;
`;
