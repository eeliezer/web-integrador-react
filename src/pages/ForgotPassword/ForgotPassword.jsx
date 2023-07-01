import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  ForgotContainerStyled,
  ForgotEmailStyled,
  Form,
  ButtonContainer,
} from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik>
        <Form>
          <LoginInput
            name='email'
            type='text'
            placeholder='Correo de recuperación'
          />
          <ButtonContainer>
            <ForgotEmailStyled onClick={() => navigate('/login')}>
              Volver a Iniciar sesión
            </ForgotEmailStyled>

            <Submit type='button' onClick={e => e.preventDefault()}>
              Ingresar
            </Submit>
          </ButtonContainer>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
