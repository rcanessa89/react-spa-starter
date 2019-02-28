import { NotFound } from '@pages';
import { createRouterState } from '@utils';
import * as React from 'react';

const login = createRouterState({
  component: React.lazy(() => import('@pages/Login/index')),
  data: {
    public: true
  },
  name: 'login',
  url: '/login',
});

const home = createRouterState({
  component: React.lazy(() => import('@pages/Home/index')),
  name: 'home',
  url: '/',
});

const notFound = {
  component: NotFound,
  name: 'not-found',
  url: '/404',
};

const states = {
  home,
  login,
  notFound
};

export default states;
