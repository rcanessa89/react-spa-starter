import { lazy, mount } from 'navi'
import paths from './paths';

const home = lazy(() => import('@pages/Home'));
const login = lazy(() => import('@pages/Login'));

export default mount({
  [paths.login]: login,
  [paths.home]: home,
});
