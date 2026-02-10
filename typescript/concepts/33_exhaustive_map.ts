export {};

// Concept 33: Exhaustive mapping with Record

type Role = "admin" | "user" | "guest";

const labels: Record<Role, string> = {
  admin: "Administrator",
  user: "User",
  guest: "Guest",
};

function label(role: Role): string {
  return labels[role];
}
