import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;

  @media (max-width: 803px) {
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    user-select: none;
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (max-width: 769px) {
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    user-select: none;
    flex-wrap: wrap;
  }
  @media (max-width: 481px) {
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    user-select: none;
    flex-wrap: wrap;
  }
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 190px;
  padding: 1rem 2rem;
  color: ${({ selected }) =>
    selected ? 'var(--background-card-white)' : 'var(--button-bg-red)'};
  background-color: ${({ selected }) =>
    selected ? 'var(--gray-bg-disabled)' : 'var(--button-bg-white)'};
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  h2 {
    font-size: 1rem;
  }

  img {
    width: auto;
    height: 50px;
  }

  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }

  @media (max-width: 481px) {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 0.5rem;
    width: 110px;
    padding: 1rem 2rem;
    color: var(--button-bg-red);
    border-radius: 5px;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    h2 {
      display: none;
    }

    img {
      width: auto;
      height: 35px;
    }
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--gray-bg-disabled);
  border-radius: 15px;
`;
