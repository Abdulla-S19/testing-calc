/** Raises a to the power of b and returns the result. */
export function power(a: number, b: number): number {
  return a ** b;
}

/** Adds two numbers and returns the sum. */
export function add(a: number, b: number): number {
  return a + b;
}

/** Subtracts b from a and returns the difference. */
export function subtract(a: number, b: number): number {
  return a - b;
}

/** Multiplies two numbers and returns the product. */
export function multiply(a: number, b: number): number {
  return a * b;
}

/** Divides a by b and returns the quotient. Throws if b is 0. */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

/** Returns the square root of a. */
export function squareRoot(a: number): number {
  return Math.sqrt(a);
}

/** Returns value as a percentage of total, e.g. percentage(25, 200) === 12.5. Throws if total is 0. */
export function percentage(value: number, total: number): number {
  return divide(value, total) * 100;
}
export const RATE_A = 0.1;
export const RATE_B = 0.2;
export const RATE_C = 0.3;


export function mod(a:number,b:number){
  return a % b;
}

/** Returns the average of the numbers, or 0 if the list is empty. */
export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}