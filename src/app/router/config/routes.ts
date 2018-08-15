import { IAppRoute } from '@interfaces';
import paths from './paths';

// Route Components
import Home from '@pages/Home';
import Login from '@pages/Login';

const home: IAppRoute = {
  component: Home,
  exact: true,
  path: paths.home,
};

const login: IAppRoute = {
  component: Login,
  exact: true,
  path: paths.root,
};

const routes: IAppRoute[] = [
  home,
  login,
];

export default routes;
