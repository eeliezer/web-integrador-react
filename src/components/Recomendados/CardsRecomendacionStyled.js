import styled from 'styled-components';

export const CardsContainer = styled.div`
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  height: 380px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  justify-items: center;
`;

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  height: 330px;
  padding: 1rem 1.7rem;
  border: 1px solid rgba(33, 33, 33, 0.3);
  border-radius: 15px;
  flex-flow: column nowrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  gap: 5px;
  width: 220px;
  color: var(--button-bg-red);
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  font-size: 1rem;
`;

export const InfoCard = styled.p`
  margin: 0;
  color: var(--gray-bg-disabled);
  font-size: 0.8rem;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  background: var(--button-bg-red);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
