import actionCreator from '../action-creator';

describe('Utils - action-creator', () => {
  it('Without payload', () => {
    const expected = {
      type: 'Test',
    };
    const result = actionCreator('Test')();

    expect(result).toEqual(expected);
  });

  it('With payload', () => {
    const expected = {
      payload: 'payload',
      type: 'Test',
    };
    const result = actionCreator<{ type: any, payload: string }, string>('Test')('payload');

    expect(result).toEqual(expected);
  });
});
