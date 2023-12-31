export function subtract(a: number, b: number): number {
  if(isNaN(a) || isNaN(b)) throw new Error('The provided input must be a number');
  return a - b;
}
export function add(a: number, b: number): number {
  if(isNaN(a) || isNaN(b)) throw new Error('The provided input must be a number');
  return a + b;
}
export function divide(a: number, b: number): number {
  if(isNaN(a) || isNaN(b)) throw new Error('The provided input must be a number');
  if(b === 0) throw new Error('Dividing by zero is not allowed');
  return a / b;
}
export function multiply(a: number, b: number): number {
  if(isNaN(a) || isNaN(b)) throw new Error('The provided input must be a number');
  return a * b;
}
