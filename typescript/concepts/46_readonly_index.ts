export {};

// Concept 46: readonly index signatures

type ReadonlyMap = { readonly [key: string]: number };
const rmap: ReadonlyMap = { a: 1 };
// rmap.a = 2; // Error
