import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('Matches the snapshot', () => {
    const tree = shallow(<Header />);

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Should has header element', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('header').exists()).toBe(true);
  });

  it('Should has an h1 element with text "Welcome to React"', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
  });

  it('Should has an image elemet with alt "logo"', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').prop('alt')).toEqual('logo');
    expect(wrapper.find('img').props()).toHaveProperty('src');
  });
});
