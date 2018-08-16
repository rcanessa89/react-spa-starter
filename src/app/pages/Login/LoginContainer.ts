import { IAuthOff } from '@actions/auth';
import { IFetchData } from '@actions/fetch';
import { IAuth, IAuthCredentials } from '@interfaces';
import { withFormik } from 'formik';
import { object, string } from 'yup';

export interface IFormProps  {
  login: (payload: IAuthCredentials) => IFetchData;
  logout: () => IAuthOff;
  auth: IAuth;
};

export interface IFormValues {
  email: string;
  password: string;
};

export default withFormik<IFormProps, IFormValues>({
  handleSubmit: ({ email, password }, { props }) => {
    props.login({ email, password });
  },
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: object().shape({
    email: string()
      .trim()
      .email('Username should be a valid email format.')
      .required('Username is required.'),
    password: string()
      .trim()
      .required('Password is required.'),
  }),
});
