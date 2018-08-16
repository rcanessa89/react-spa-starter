import NotFound from '@pages/NotFound';
import { history } from '@router';
import store from '@store';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import AppRouter from '../AppRouter';

configure({ adapter: new Adapter() });

describe('<AppRouter />', () => {
  const shallowAppRouter = shallow(<AppRouter />, {
    context: {
      store,
    },
  });

  it('Should has Router component with history property and contains Switch and the not found Route', () => {
    expect(shallowAppRouter.dive().find(Router).exists()).toBe(true);
    expect(shallowAppRouter.dive().find(Router).props()).toHaveProperty('history', history);
  });

  it('Should has a Switch component inside the Router', () => {
    expect(shallowAppRouter.dive().find(Router).find(Switch).exists()).toBe(true);
  });

  it('Should has a Route component with property component with NotFound value', () => {
    expect(shallowAppRouter.dive().find(Router).find(Route).exists()).toBe(true);
    expect(shallowAppRouter.dive().find(Router).find(Route).props()).toHaveProperty('component', NotFound);
  });
});
