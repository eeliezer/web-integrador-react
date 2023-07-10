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
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';
import { loginUser } from '../../axios/axios-user';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          const { email, password } = values;
          const user = await loginUser(email, password);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Email' />
          <ButtonContainer>
            <Submit
              type='button'
              onClick={e =>
                e.preventDefault(
                  alert(
                    'Se ha enviado un correo electrónico, para que restablezcas tu contraseña'
                  )
                )
              }
            >
              Ingresar
            </Submit>
            <ForgotEmailStyled onClick={() => navigate('/login')}>
              Volver a Iniciar sesión
            </ForgotEmailStyled>
          </ButtonContainer>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
