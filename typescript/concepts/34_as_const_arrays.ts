export {};

// Concept 34: as const on arrays and tuple inference

const tuple = ["a", 1] as const; // readonly ["a", 1]
type Tuple = typeof tuple;
