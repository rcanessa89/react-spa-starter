import * as actions from '../actions';
import { method } from '../interfaces';
import * as types from '../types';

describe('Containers Fetch actions', () => {
  it('fetchData', () => {
    const payloadMethod: method = 'GET';
    const payload = {
      failed: (p: any) => ({
        payload: p,
        type: 'FAILED'
      }),
      options: {
        method: payloadMethod,
        url: '/url'
      },
      success: (p: any) => ({
        payload: p,
        type: 'SUCCESS',
      }),
    };
    const expected = {
      payload,
      type: types.FETCH_DATA,
    };
    const result = actions.fetchData(payload);

    expect(result).toEqual(expected);
  });

  it('fetchDataCompleted', () => {
    const expected = {
      type: types.FETCH_DATA_COMPLETED,
    };
    const result = actions.fetchDataCompleted();

    expect(result).toEqual(expected);
  });

  it('fetchDataCancel', () => {
    const expected = {
      type: types.FETCH_DATA_CANCEL,
    };
    const result = actions.fetchDataCancel();

    expect(result).toEqual(expected);
  });
});
