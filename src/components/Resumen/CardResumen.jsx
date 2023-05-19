import React from 'react';
import { formatPrice } from '../../utils';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './CardResumenStyles';

const CardResumen = () => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src='https://res.cloudinary.com/divurmndi/image/upload/v1684283766/El-album-de-bodas_bshqul.jpg'
          alt='DC Comics Deluxe – La Muerte de Superman'
        />
        <div>
          <h3>DC Comics Deluxe – La Muerte de Superman</h3>
          <p>Libro de cara dura</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>2U</p>
        <ProductPriceStyled>{formatPrice(5000 * 2)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
