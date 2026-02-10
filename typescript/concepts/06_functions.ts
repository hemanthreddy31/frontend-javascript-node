export {};

// Concept 06: Functions, parameters, and overloads

function add(a: number, b: number): number {
  return a + b;
}

// Optional and default parameters
function greet(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

function repeat(text: string, times: number = 2): string {
  return text.repeat(times);
}

// Rest parameters
function sum(...values: number[]): number {
  return values.reduce((acc, v) => acc + v, 0);
}

// Function type alias
type BinaryOp = (a: number, b: number) => number;
const mul: BinaryOp = (a, b) => a * b;

// Overloads: multiple call signatures
function pad(value: string, padding: number): string;
function pad(value: string, padding: string): string;
function pad(value: string, padding: number | string): string {
  if (typeof padding === "number") return " ".repeat(padding) + value;
  return padding + value;
}

// this parameter typing
function toFixed(this: Number, digits: number) {
  return this.toFixed(digits);
}
const num = new Number(3.14159);
const fixed = toFixed.call(num, 2);
