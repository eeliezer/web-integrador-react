import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 4%;
  color: #fff;
  font-weight: 600;
  height: 60vh;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  gap: 20px;
  input {
    -webkit-text-fill-color: black;
  }
  button {
    background: var(--button-bg-white);
    color: #ed1703;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
  }
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--button-bg-white);
  color: #ed1703;
  cursor: pointer;
  font-family: 'Quantico', sans-serif;
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: var(--button-bg-white);
    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
