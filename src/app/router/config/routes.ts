import { IAppRoute } from '@interfaces';
import paths from './paths';

// Route Components
import Home from '@pages/Home';

const home: IAppRoute = {
  component: Home,
  exact: true,
  path: paths.home,
};

const routes: IAppRoute[] = [
  home,
];

export default routes;
