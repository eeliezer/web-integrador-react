import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  color: var(--button-bg-white);
  gap: 75px;
  h1 {
    margin-bottom: 2rem;
    font-family: 'Quantico', sans-serif;
  }
`;

export const LogoHeroimg = styled.img`
  width: 200px;
`;
