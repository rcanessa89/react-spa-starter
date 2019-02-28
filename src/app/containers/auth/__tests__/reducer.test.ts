import reducer from '../reducer';
import * as types from '../types'

describe('Containers Auth reducer', () => {
  const initialState = {
    isAuthorized: false,
    user: null,
  };

  it(types.AUTH_REQUEST_SUCCESS, () => {
    const action = {
      payload: null,
      type: types.AUTH_REQUEST_SUCCESS,
    }
    const expected = {
      isAuthorized: true,
      message: 'Authentication success',
      user: null,
    };
    const result = reducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it(types.AUTH_REQUEST_FAILED, () => {
    const actionPayload = 'Error';
    const action = {
      payload: actionPayload,
      type: types.AUTH_REQUEST_FAILED,
    };
    const expected = {
      isAuthorized: false,
      message: actionPayload,
      user: null,
    };
    const result = reducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it(types.AUTH_OFF, () => {
    const action = {
      payload: null,
      type: types.AUTH_OFF,
    };
    const expected = initialState;
    const result = reducer(initialState, action);

    expect(result).toEqual(expected);
  });
});
