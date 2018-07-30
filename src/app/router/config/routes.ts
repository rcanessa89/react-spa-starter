import { IAppRoute } from '../interfaces';
import paths from './paths';

// Route Components
import { Home } from '@pages';

const home: IAppRoute = {
  component: Home,
  path: paths.home,
};

const routes: IAppRoute[] = [
  home,
];

export default routes;
