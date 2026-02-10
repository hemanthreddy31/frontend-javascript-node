export {};

// Concept 07: Generics
// Generics parameterize types so the same code works with multiple types.

function identity<T>(value: T): T {
  return value;
}
const n = identity(123);
const s = identity("abc");

// Constraints
function lengthOf<T extends { length: number }>(value: T): number {
  return value.length;
}
lengthOf("hello");
lengthOf([1, 2, 3]);

// Default generic type
type Box<T = string> = { value: T };
const stringBox: Box = { value: "hi" };
const numberBox: Box<number> = { value: 123 };

// Generic interface and class
interface Repo<T> {
  getById(id: string): T | undefined;
}

class MemoryRepo<T> implements Repo<T> {
  private data = new Map<string, T>();
  getById(id: string): T | undefined {
    return this.data.get(id);
  }
  set(id: string, value: T) {
    this.data.set(id, value);
  }
}
