import { IAppRoute } from '@interfaces';
import { CreateAsyncComponent } from '@utils';
import paths from './paths';

const home: IAppRoute = {
  component: CreateAsyncComponent(() => import('@pages/Home')),
  exact: true,
  path: paths.home,
};

const login: IAppRoute = {
  component: CreateAsyncComponent(() => import('@pages/Login')),
  exact: true,
  path: paths.root,
  public: true,
};

const routes: IAppRoute[] = [
  home,
  login,
];

export default routes;
