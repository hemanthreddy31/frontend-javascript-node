export {};

// Concept 05: Structural typing (duck typing)
// Type compatibility is based on structure, not nominal identity.

type Point = { x: number; y: number };
const p = { x: 1, y: 2, z: 3 };

// Extra fields are allowed when assigned through a variable
const point: Point = p;

// Excess property checks on object literals are stricter
// const bad: Point = { x: 1, y: 2, z: 3 }; // Error
