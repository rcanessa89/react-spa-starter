import actionCreator from '../action-creator';

describe('Utils - action-creator', () => {
  it('Without payload', () => {
    const expected = {
      type: 'Test',
    };
    const result = actionCreator('Test')();

    expect(result).toEqual(expected);
  });
});
