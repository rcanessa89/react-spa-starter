import { AuthContainer } from '@containers';
import Login from './Login';
import LoginContainer from './LoginContainer';

export default AuthContainer(LoginContainer(Login));
