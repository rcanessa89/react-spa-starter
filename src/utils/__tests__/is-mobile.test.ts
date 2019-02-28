import isMobile from '../is-mobile';

describe('Utils is-mobile', () => {
  it('Should return a boolean', () => {
    const expected = 'boolean';
    const result = typeof isMobile();

    expect(result).toEqual(expected);
  });

  it('Should return false in a non mobile device', () => {
    const expected = false;
    const result = isMobile();

    expect(result).toEqual(expected);
  });
});
