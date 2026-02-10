export {};

// Concept 20: Modules and type-only imports
// Example (in separate files):
// a.ts: export interface A { x: number }
// b.ts: import type { A } from "./a"; const a: A = { x: 1 };
