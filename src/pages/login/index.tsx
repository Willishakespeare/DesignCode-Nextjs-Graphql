import React, { useState } from 'react';
import styled from '@Styles/styled';
import LoginPageTemplate from '@Templates/LoginPageTemplate';
import { useFormik } from 'formik';
import { useMutation, gql } from '@apollo/client';
import * as Yup from 'yup';
import MessageAlert from '@Atoms/MessageAlert';
import Cookies from 'js-cookie';

const AUTH_USER = gql`
  mutation authUser($input: AuthInputUser) {
    authUser(input: $input) {
      token
    }
  }
`;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  color: white;
  background-color: black;
  z-index: 2;
`;

const ProjectsPage: React.FC = () => {
  const [messageAlert, useMessageAlert] = useState(null);
  const [authUser] = useMutation(AUTH_USER);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('El Email es Obligatorio'),
      password: Yup.string()
        .required('El Password es Obligatorio')
        .min(6, 'El password debetener al menos 6 catacteres')
    }),
    onSubmit: async (valores) => {
      const { email, password } = valores;
      const { data } = await authUser({
        variables: {
          input: {
            email,
            password
          }
        }
      }).catch((error) => {
        useMessageAlert(error.message);
        setTimeout(() => {
          useMessageAlert(null);
        }, 3000);
        throw new Error(error.message);
      });

      useMessageAlert(`Autenticando....`);
      const { token } = data.authUser;
      localStorage.setItem('token', token);
      Cookies.set('token', token, { expires: 7 });
      setTimeout(() => {
        useMessageAlert(null);
        document.location.href = '/';
      }, 2000);
    }
  });

  return (
    <LoginPageTemplate>
      <StyledLogin>
        <MessageAlert alert={messageAlert} />
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">
              Email
              <input
                id="email"
                type="email"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div>
              <p>Error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null}
          <div>
            <label htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </label>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div>
              <p>Error</p>
              <p>{formik.errors.password}</p>
            </div>
          ) : null}
          <input type="submit" value="iniciar Secion" />
        </form>
        <a href="/signup">Dont Have account</a>
      </StyledLogin>
    </LoginPageTemplate>
  );
};

export default ProjectsPage;
