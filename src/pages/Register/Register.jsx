import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';

const Register = () => {
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik>
        <Form>
          <LoginInput type='text' placeholder='Nombre' />
          <LoginInput type='text' placeholder='Email' />
          <LoginInput type='password' placeholder='Password' />
          <Submit type='button' onClick={e => e.preventDefault()}>
            Registrarte
          </Submit>
          <p>También puedes iniciar sesión con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e => e.preventDefault()}
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tienes cuenta? Inicia sesión aquí</p>
          </LoginEmailStyled>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
