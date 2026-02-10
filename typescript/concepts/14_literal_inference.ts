export {};

// Concept 14: Literal inference and as const

const cfg1 = { mode: "light", retries: 3 };
// cfg1.mode is string (widened)

const cfg2 = { mode: "dark", retries: 3 } as const;
// cfg2.mode is "dark" and cfg2 is deeply readonly

const cfg3 = { mode: "light", retries: 3 } satisfies { mode: "light" | "dark"; retries: number };
