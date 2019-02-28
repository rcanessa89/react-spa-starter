import * as actions from '../actions';
import * as types from '../types';

describe('Containers Auth actions', () => {
  it('authRequest', () => {
    const expected = {
      payload: {
        email: 'rcanessa89@hotmail.com',
        password: 'Abc!1234'
      },
      type: types.AUTH_REQUEST,
    };
    const result = actions.authRequest({
      email: 'rcanessa89@hotmail.com',
      password: 'Abc!1234'
    });

    expect(result).toEqual(expected);
  });

  it('authRequestSuccess', () => {
    const expected = {
      payload: {
        first_name: 'Rodolfo',
        id: 0,
        last_name: 'Canessa',
      },
      type: types.AUTH_REQUEST_SUCCESS,
    };
    const result = actions.authRequestSuccess({
      first_name: 'Rodolfo',
      id: 0,
      last_name: 'Canessa',
    });

    expect(result).toEqual(expected);
  });

  it('authRequestFailed', () => {
    const expected = {
      payload: 'Error',
      type: types.AUTH_REQUEST_FAILED,
    };
    const result = actions.authRequestFailed('Error');

    expect(result).toEqual(expected);
  });

  it('authOff', () => {
    const expected = {
      type: types.AUTH_OFF,
    };
    const result = actions.authOff();

    expect(result).toEqual(expected);
  });
});
