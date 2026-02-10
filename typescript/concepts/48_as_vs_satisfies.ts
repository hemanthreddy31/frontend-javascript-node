export {};

// Concept 48: as casting vs satisfies
// "as" can force a type (potentially unsafely), while "satisfies" checks structure.

type Shape = { size: number };
const x = { size: 1, color: "red" } as Shape; // allowed, but drops extra info

const y = { size: 1 } satisfies Shape; // ok, keeps literal info

// This would be an error because of an extra property:
// const z = { size: 1, color: "red" } satisfies Shape; // Error
