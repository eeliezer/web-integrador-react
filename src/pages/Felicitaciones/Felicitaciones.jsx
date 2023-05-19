import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/divurmndi/image/upload/v1684453130/red-check-mark-transparent-background-222_mr2ccb.png'
          alt='Check Ok'
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
      <PatternStyled
        src='https://res.cloudinary.com/divurmndi/image/upload/v1684453895/tile_background2_i1sfpg.png'
        alt=''
        className='pattern'
      />
    </div>
  );
};

export default Felicitaciones;
