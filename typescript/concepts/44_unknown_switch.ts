export {};

// Concept 44: unknown + exhaustive checks in switch

function parse(value: unknown) {
  switch (typeof value) {
    case "string":
      return value.toUpperCase();
    case "number":
      return value.toFixed(2);
    default:
      return value;
  }
}
