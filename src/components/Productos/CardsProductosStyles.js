import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
`;

export const ProductosCard = styled.div`
  background: var(--background-card-white);
  width: 300px;
  height: 590px;
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
    color: var(--button-bg-red);
    font-size: 1.5rem;
  }
  p {
    color: var(--gray-bg-disabled);
    font-size: 1.2rem;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  background: var(--button-bg-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
