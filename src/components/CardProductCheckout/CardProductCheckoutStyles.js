import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 85%;
  background: var(--background-card-white);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 240px;
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 0.8rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 2rem;
  background: var(--button-bg-red);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;
`;
