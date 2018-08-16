import { AuthContainer } from '@containers';
import { Header } from '@share';
import { InjectedFormikProps } from 'formik';
import * as React from 'react';
import './login.css';
import LoginContainer, { IFormProps, IFormValues } from './LoginContainer';

const emailId = 'login-email-field';
const passwordId = 'login-password-field';

const Login: React.SFC<InjectedFormikProps<IFormProps, IFormValues>> = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched
}) => (
  <div className="login">
    <Header />
    <div>
      <h1 className="login__title">Login</h1>
    </div>
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor={emailId}>Email</label>
          <input
            id={emailId}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <input
            id={passwordId}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default AuthContainer(LoginContainer(Login));
