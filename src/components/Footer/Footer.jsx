import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainerStyled, LinksContainerStyled } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled className='links'>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          Términos de Uso y condiciones
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          Nuestras tiendas
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          Ayuda
        </Link>
      </LinksContainerStyled>
      <p>
        Eliezer Espejo<span> Red Ninja Collections</span>
      </p>
    </FooterContainerStyled>
  );
};

export default Footer;
