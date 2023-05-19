import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginPasswordStyled,
  LoginInputContainer,
} from './LoginStyles';

const Login = () => {
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik>
        <Form>
          <LoginInputContainer>
            <LoginInput type='text' placeholder='Email' />
            <LoginInput type='password' placeholder='Password' />
            <Submit type='button' onClick={e => e.preventDefault()}>
              Login
            </Submit>
          </LoginInputContainer>
          <Link to='/forgot-password'>
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <p>Tambien puedes ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e => e.preventDefault()}
          >
            <img
              src='https://res.cloudinary.com/divurmndi/image/upload/v1684097818/icono_de_google_qovubs.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <Link to='/register'>
            <LoginEmailStyled>
              ¿Aún no te has registrado? Haz Click Aquí
            </LoginEmailStyled>
          </Link>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
