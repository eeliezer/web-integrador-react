import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ForgotContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: calc(100vh - 400px);
  h1 {
    color: var(--button-bg-white);
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const ForgotEmailStyled = styled.p`
  color: var(--button-bg-red);
  cursor: pointer;
  background: var(--button-bg-white);
  border-radius: 5px;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  text-transform: uppercase;
  :hover {
    transition: all 0.25s ease-out;
  }
  :active {
    scale: 0.95;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;