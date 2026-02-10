export {};

// Concept 35: Optional properties vs union with undefined

type A = { name?: string };
type B = { name: string | undefined };

const a: A = {};
const b: B = { name: undefined };
