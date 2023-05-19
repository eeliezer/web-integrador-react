import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 150px;
  padding: 1rem 2rem;
  color: ${({ selected }) =>
    selected ? 'var(--background-card-white)' : 'var(--button-bg-red)'};
  background-color: ${({ selected }) =>
    selected ? 'var(--gray-bg-disabled)' : 'var(--button-bg-white)'};
  border-radius: 5px;
  cursor: pointer;

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
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--gray-bg-disabled);
  border-radius: 15px;
`;
