import { IAppRoute } from '@interfaces';
import paths from './paths';

// Route Components
import Home from '@pages/home';

const home: IAppRoute = {
  component: Home,
  path: paths.home,
};

const test: IAppRoute = {
  component: Home,
  path: '/test',
};

const routes: IAppRoute[] = [
  home,
  test,
];

export default routes;
