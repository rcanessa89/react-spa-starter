import { IAppRoute } from '@interfaces';
import { CreateAsyncComponent } from '@utils';
import paths from './paths';

const home: IAppRoute = {
  component: CreateAsyncComponent(() => import('@pages/Home')),
  exact: true,
  path: paths.home,
  title: 'Home',
};

const login: IAppRoute = {
  component: CreateAsyncComponent(() => import('@pages/Login')),
  exact: true,
  path: paths.root,
  public: true,
  title: 'Login',
};

const test: IAppRoute = {
  component: CreateAsyncComponent(() => import('@pages/Test')),
  nested: [
    {
      component: CreateAsyncComponent(() => import('@pages/Home')),
      exact: true,
      path: '/test/home',
      public: true,
      title: 'Home',
    }
  ],
  path: paths.test,
  public: true,
  title: 'Test page',
};

const routes: IAppRoute[] = [
  home,
  login,
  test,
];

export default routes;
