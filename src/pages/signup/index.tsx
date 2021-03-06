import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@Styles/styled';
import LoginPageTemplate from '@Templates/LoginPageTemplate';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import MessageAlert from '@Atoms/MessageAlert';

const NEW_USER = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastname
      email
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
  const [newUser] = useMutation(NEW_USER);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es Obligatorio'),
      lastname: Yup.string().required('El Apellido es Obligatorio'),
      email: Yup.string().email().required('El Email es Obligatorio'),
      password: Yup.string()
        .required('El Password es Obligatorio')
        .min(6, 'El password debetener al menos 6 catacteres')
    }),
    onSubmit: async (valores) => {
      const { name, lastname, email, password } = valores;

      const { data } = await newUser({
        variables: {
          input: {
            name,
            lastname,
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

      useMessageAlert(`El usuario ${data.newUser.name} se registro correctamente`);
      setTimeout(() => {
        useMessageAlert(null);
        router.push('/login');
      }, 2000);
    }
  });
  return (
    <LoginPageTemplate>
      <StyledLogin>
        <MessageAlert alert={messageAlert} />
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.name && formik.errors.name ? (
              <div>
                <p>Error</p>
                <p>{formik.errors.name}</p>
              </div>
            ) : null}
          </div>

          <div>
            <label htmlFor="lastname">
              Last Name
              <input
                id="lastname"
                type="text"
                placeholder="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
            </label>
          </div>
          {formik.touched.lastname && formik.errors.lastname ? (
            <div>
              <p>Error</p>
              <p>{formik.errors.lastname}</p>
            </div>
          ) : null}
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
          <input type="submit" value="signup" />
        </form>
      </StyledLogin>
    </LoginPageTemplate>
  );
};

export default ProjectsPage;
