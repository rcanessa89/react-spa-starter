import getEnvVar from '../get-env-var';

describe('Util get-env-var', () => {
  it('Get environment value', () => {
    const expected = 'test';
    const result = getEnvVar('env');

    expect(result).toEqual(expected);
  });
});
