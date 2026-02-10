export {};

// Concept 45: as const with objects for key safety

const Actions = {
  Add: "ADD",
  Remove: "REMOVE",
} as const;

type ActionType = typeof Actions[keyof typeof Actions];
