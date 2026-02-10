export {};

// Concept 26: Assertion functions (asserts)

function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") throw new Error("Not a string");
}

function use(value: unknown) {
  assertIsString(value);
  value.toUpperCase();
}
