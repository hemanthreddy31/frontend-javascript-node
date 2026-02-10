export {};

// Concept 40: satisfies with unions for config

type Config =
  | { mode: "dev"; debug: true }
  | { mode: "prod"; debug: false };

const config = { mode: "dev", debug: true } satisfies Config;
