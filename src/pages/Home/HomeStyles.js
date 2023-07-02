import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 90vw;
  max-width: 1600px;
  padding: 1.5rem;
  margin: 0 auto;
  color: #ffffff;
  font-weight: 600;
  h2 {
    font-weight: 400;
  }
`;

export const CategoriasWrapper = styled.section`
  margin-top: 8rem;
  @media (max-width: 481px) {
    margin-top: 2rem;
    h2 {
      text-align: center;
      text-transform: uppercase;
    }
  }
`;

export const ProductosWrapper = styled.section`
  padding-top: 5rem;
  @media (max-width: 481px) {
    padding-top: 2rem;
    h2 {
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }
`;

export const RecomendadosWrapper = styled.section`
  margin-top: 5rem;
  width: 100%;
  h2 {
    font-weight: 400;
  }

  @media (max-width: 481px) {
    margin-top: 0rem;

    h2 {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
  button {
    background: white;
    color: red;
  }

  button:disabled {
    background: black;
  }
`;
