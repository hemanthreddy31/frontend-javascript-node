export {};

// Concept 47: satisfies for exhaustive maps

type Role = "admin" | "user";
const labels = {
  admin: "Administrator",
  user: "User",
} satisfies Record<Role, string>;
