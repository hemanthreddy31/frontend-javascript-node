export {};

// Concept 29: Readonly vs immutable
// Readonly prevents reassignment but does not guarantee deep immutability.

const ro: Readonly<{ nested: { x: number } }> = { nested: { x: 1 } };
ro.nested.x = 2; // allowed: nested is not readonly
