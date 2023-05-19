import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;
  color: var(--button-bg-white);
  text-transform: uppercase;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  height: 440px;
  margin: 0 auto;
  color: var(--button-bg-red);
  text-transform: uppercase;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg-disabled);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--button-bg-white);
  text-transform: uppercase;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: var(--button-bg-white);
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
  color: var(--button-bg-white);
`;

export const TextEmpty = styled.p`
  color: var(--button-bg-white);
`;
