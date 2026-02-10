export {};

// Concept 28: Function overload with generics

function first<T>(items: T[]): T;
function first<T>(items: readonly T[]): T;
function first<T>(items: readonly T[]): T {
  return items[0];
}
