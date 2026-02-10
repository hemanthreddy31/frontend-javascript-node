export {};

// Concept 16: Index signatures and Record

type StringMap = { [key: string]: string };
const map: StringMap = { a: "1", b: "2" };

type Roles = "admin" | "user";
const roleLabels: Record<Roles, string> = {
  admin: "Administrator",
  user: "Standard User",
};
