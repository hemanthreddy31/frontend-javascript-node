export {};

// Concept 24: The satisfies operator
// It checks assignability without changing the inferred type.

type Schema = { name: string; tags: string[] };

const data = {
  name: "example",
  tags: ["a", "b"],
} satisfies Schema;

// Extra properties would fail excess property checks:
// const withExtra = { name: "example", tags: ["a"], extra: 123 } satisfies Schema; // Error
