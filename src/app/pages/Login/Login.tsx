import { Header } from '@share';
import { FormikProps } from 'formik';
import * as React from 'react';
import './login.css';

const emailId = 'login-email-field';
const passwordId = 'login-password-field';

const Login: React.SFC<FormikProps<any>> = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  ...props
}) => {
  console.log(props);

  return (
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
};

export default Login;
