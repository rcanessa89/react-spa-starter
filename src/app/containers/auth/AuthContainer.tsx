import { IStore } from '@interfaces';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { object, string } from 'yup';
import {
  AuthAction,
  authOff,
  authRequest,
} from './actions';
import {
  IAuthCredentials,
  IAuthDispatch,
  IAuthFormikValues,
  IAuthState
} from './interfaces';

const mapStateToProps = ({ auth }: IStore): IAuthState => auth;

const mapDispatchToProps = (dispatch: Dispatch<AuthAction>): IAuthDispatch => ({
  login: (payload: IAuthCredentials) => dispatch(authRequest(payload)),
  logout: () => dispatch(authOff()),
});

const formikContainer = withFormik<IAuthState & IAuthDispatch, IAuthFormikValues>({
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

export default function authWrapper(Component: any) {
  const formikForm = formikContainer(Component);

  return connect<IAuthState, IAuthDispatch>(mapStateToProps, mapDispatchToProps)(formikForm);
};
