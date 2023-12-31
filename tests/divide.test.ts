import { divide} from "../src";

describe('divide', () => {

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides two negative numbers', () => {
    expect(divide(-10, -2)).toBe(5);
  });
  
  test('divides a positive number by a negative number', () => {
    expect(divide(10, -2)).toBe(-5);
  });
  
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Dividing by zero is not allowed');
  });
  test('input not as a number', () => {
    expect(() =>divide('a' as any, -2)).toThrow('The provided input must be a number');
  });
});