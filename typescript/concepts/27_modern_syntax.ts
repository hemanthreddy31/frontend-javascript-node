export {};

// Concept 27: Modern syntax supported by TypeScript

const maybe: string | null = null;
const length = maybe?.length ?? 0; // optional chaining + nullish coalescing
