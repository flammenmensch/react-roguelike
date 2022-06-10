import * as math from './math';

describe('utils/math.ts', () => {
  test('getRandomInt', () => {
    const expectedFrom = 1;
    const expectedTo = 8;
    const actual = math.getRandomInt(expectedFrom, expectedTo);

    expect(actual).toBeGreaterThanOrEqual(expectedFrom);
    expect(actual).toBeLessThanOrEqual(expectedTo);
  });
});
