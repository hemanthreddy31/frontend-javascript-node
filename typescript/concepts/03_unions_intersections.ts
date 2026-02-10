export {};

// Concept 03: Unions, intersections, and narrowing
// Unions allow multiple possible types. Intersections combine types.
// Narrowing refines a union to a specific member.

type ID = string | number;
const userId: ID = "u1";

type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;
const person: Person = { name: "Ada", age: 36 };

function formatId(id: ID): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toFixed(0);
}
