import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 0.8rem 2rem;
  color: var(--gray-bg-disabled);
  background-color: var(--button-bg-white);
  border-radius: 5px;
  border: ${({ isError }) => (isError ? '1px solid green ' : 'none')};
  outline: none;
  caret-color: white;
  font-family: 'Quantico', sans-serif;

  ::placeholder {
    opacity: 80%;
    color: var(--button-bg-red);
  }
  -webkit-text-fill-color: var(--gray-bg-disabled);

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(yellow) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: blue;
  font-size: 14px;
`;
