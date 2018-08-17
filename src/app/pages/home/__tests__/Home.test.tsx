import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import Home from '../Home';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let shallowHome: ShallowWrapper;

  beforeEach(() => {
    shallowHome = shallow(<Home />);
  });

  it('Matches the snapshot', () => {
    expect(toJson(shallowHome)).toMatchSnapshot();
  });
});
