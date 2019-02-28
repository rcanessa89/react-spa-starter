import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import createRouterState from '../create-router-state';

configure({ adapter: new Adapter() });

describe('Utils create-route-state', () => {
  const routerState = createRouterState({
    component: React.lazy(() => import('@pages/Home/index')),
    name: 'home',
    url: '/',
  });
  const RouterStateComponent = routerState.component;
  let shallowComponent: ShallowWrapper;

  beforeEach(() => {
    shallowComponent = shallow(<RouterStateComponent />);
  });

  it('Should has route state keys and values', () => {
    const resultName = 'home';
    const resultUrl = '/';
    const expectedName = routerState.name;
    const expectedUrl = routerState.url;

    expect(resultName).toEqual(expectedName);
    expect(resultUrl).toEqual(expectedUrl);
  });

  it('Match the snapshot', () => {
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });
});
