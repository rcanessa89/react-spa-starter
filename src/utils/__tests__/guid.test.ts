import guid from '../guid';

describe('Utils guid', () => {
  it('Should be a string', () => {
    const expected = 'string';
    const result = typeof guid();

    expect(result).toEqual(expected);
  });

  it('Should be has 36 of length', () => {
    const expected = 36;
    const result = guid().length;

    expect(result).toEqual(expected);
  });
});
