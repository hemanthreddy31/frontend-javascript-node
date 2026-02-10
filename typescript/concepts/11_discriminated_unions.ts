export {};

// Concept 11: Discriminated unions and exhaustiveness

type Square = { kind: "square"; size: number };
type Circle = { kind: "circle"; radius: number };
type Shape = Square | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    default: {
      const _exhaustive: never = shape;
      return _exhaustive;
    }
  }
}
