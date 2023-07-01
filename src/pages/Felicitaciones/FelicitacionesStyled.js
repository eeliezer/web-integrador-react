import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
  margin-top: 5%;
  button {
    background-color: var(--button-bg-white);
    color: var(--button-bg-red);
  }
`;

export const TitleStyled = styled.h1`
  color: var(--button-bg-white);
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: 5%;
  font-size: 3rem;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 50px;
    color: var(--button-bg-white);
    font-size: 1rem;
  }
`;
