import {subtract} from "../src";


describe('subtract function', () => {
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