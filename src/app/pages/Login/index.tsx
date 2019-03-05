import AuthContainer from '@containers/auth/AuthContainer';
import { mount, route } from 'navi';
import Login from './Login';

export default mount({
  '/': route({
    view: AuthContainer(Login),
  }),
});
