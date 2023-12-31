import { subtract} from "../src";


describe('subtract function', () => {
  test('input not as a number', () => {
    expect(() => subtract('a' as any, -2)).toThrow('The provided input must be a number');
  });
  it('should correctly subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should return negative result when second number is greater', () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  it('should return zero when both numbers are equal', () => {
    expect(subtract(5, 5)).toBe(0);
  });
});