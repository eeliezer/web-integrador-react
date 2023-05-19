import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ bgColor }) => bgColor || 'var(--button-bg-white)'};
  border: none;
  border-radius: 15px;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--button-bg-red);
  cursor: pointer;
  font-family: 'Quantico', sans-serif;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
