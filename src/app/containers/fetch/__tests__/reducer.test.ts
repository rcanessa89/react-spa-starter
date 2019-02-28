import reducer from '../reducer';
import * as types from '../types';

describe('Containers Fetch reducer', () => {
  const initialState = {
    loading: false,
    request: null,
  };

  it(types.FETCH_DATA, () => {
    const action = {
      payload: null,
      type: types.FETCH_DATA
    };
    const expected = {
      loading: true,
      request: null,
    };
    const result = reducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it(types.FETCH_DATA_COMPLETED, () => {
    const action = {
      payload: null,
      type: types.FETCH_DATA_COMPLETED,
    };
    const expected = {
      loading: false,
      request: null,
    };
    const result = reducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it(types.FETCH_DATA_CANCEL, () => {
    const action = {
      payload: null,
      type: types.FETCH_DATA_CANCEL,
    };
    const expected = {
      loading: false,
      request: null,
    };
    const result = reducer(initialState, action);

    expect(result).toEqual(expected);
  });
});
