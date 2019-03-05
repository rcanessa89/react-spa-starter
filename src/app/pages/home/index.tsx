import AuthContainer from '@containers/auth/AuthContainer';
import { mount, route } from 'navi';
import Home from './Home';

export default mount({
  '/': route({
    view: AuthContainer(Home, false),
  }),
});
