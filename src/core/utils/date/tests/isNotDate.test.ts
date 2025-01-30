import { isNotDate } from '../isNotDate';

describe('isNotDate', () => {
  it('should return true for an invalid date string', () => {
    expect(isNotDate('invalid-date')).toBe(true);
  });

  it('should return false for a valid date string', () => {
    expect(isNotDate('2023-10-10')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isNotDate('')).toBe(true);
  });

  it('should return true for a string with only spaces', () => {
    expect(isNotDate('   ')).toBe(true);
  });

  it('should return true for a string with non-date characters', () => {
    expect(isNotDate('abc123')).toBe(true);
  });

  it('should return false for a valid date-time string', () => {
    expect(isNotDate('2023-10-10T10:10:10')).toBe(false);
  });
});
