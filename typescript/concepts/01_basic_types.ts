export {};

// Concept 01: Basic types and annotations
// TypeScript provides primitive types and type annotations to describe values.
// It can also infer types automatically when it has enough information.

// Boolean, number, string
const isDone: boolean = false;
const count: number = 42;
const greeting: string = "hello";

// BigInt and symbol
const big: bigint = 9007199254740993n;
const sym: unique symbol = Symbol("id");

// null and undefined are distinct types in strict mode
let nothing: null = null;
let missing: undefined = undefined;

// object is any non-primitive value
const obj: object = { a: 1 };

// Type inference
const inferred = 123; // inferred as number

// Explicit annotation
const explicit: number = 123;

// Literal types: the type is the exact value
const status: "success" = "success";
const answer: 42 = 42;
