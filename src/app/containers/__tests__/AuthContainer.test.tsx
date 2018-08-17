
import { authRequestSuccess, authRequestFailed } from '@actions/auth';
import { AUTH_OFF } from '@redux/auth/types';
import { FETCH_DATA } from '@redux/fetch/types';
import { IAuth, IAuthCredentials } from '@interfaces';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import AuthContainer from '../AuthContainer';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

const Component = () => <div />;
const WrappedComponent = AuthContainer(Component);

interface IProps  {
  login: (payload: IAuthCredentials) => {};
  logout: Function;
  auth: IAuth;
}

describe('AuthContainer', () => {
  let wrapper: ShallowWrapper<IProps>;
  let store: MockStoreEnhanced;

  beforeEach(() =>{
    store = mockStore({
      auth: {
        user: null,
        message: '',
        isAuthorized: false,
      },
    });
    store.dispatch = jest.fn();

    wrapper = shallow(<WrappedComponent />, {
      context: {
        store: store
      }
    });
  });

  it('Maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual({
      user: null,
      message: '',
      isAuthorized: false,
      login: expect.any(Function),
      logout: expect.any(Function),
    });
  });

  it('Login should dispatch fetch action for auth', () => {
    const credentials = {
      email: 'rcanessa89@hotmail.com',
      password: 'Abc!1234',
    };

    const payload = {
      failed: authRequestFailed,
      options: {
        body: credentials,
        method: 'POST',
        url: '/login',
      },
      success: authRequestSuccess,
    };

    const action = {
      type: FETCH_DATA,
      payload,
    };

    wrapper.props().login(credentials);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('Logout should dispatch auth off', () => {
    const action = {
      type: AUTH_OFF,
    };

    wrapper.props().logout();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
