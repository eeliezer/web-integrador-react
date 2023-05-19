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
`;

export const ProductosWrapper = styled.section`
  padding-top: 5rem;
`;

export const RecomendadosWrapper = styled.section`
  margin-top: 5rem;
  width: 100%;
  h2 {
    font-weight: 400;
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
