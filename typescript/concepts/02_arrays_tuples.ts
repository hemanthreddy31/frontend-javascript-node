export {};

// Concept 02: Arrays, tuples, and readonly
// Arrays hold items of a single type; tuples hold a fixed length with per-index types.

// Arrays
const nums: number[] = [1, 2, 3];
const strs: Array<string> = ["a", "b"];

// Tuples
const pair: [string, number] = ["age", 30];

// Readonly arrays and tuples prevent reassigning elements
const roNums: readonly number[] = [1, 2];
const roTuple: readonly [string, number] = ["id", 1];

// Tuple labels improve tooling hints
const labeled: [label: string, value: number] = ["x", 10];
