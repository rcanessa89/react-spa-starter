import parsePath from '../parse-path';

describe('Utils parse-path', () => {
  it('Should return params values object', () => {
    const path = 'test/:parse/:value';
    const params = {
      parse: 1,
      value: 2,
    };
    const expected = 'test/1/2';
    const result = parsePath(path, params);

    expect(result).toEqual(expected);
  });
});
