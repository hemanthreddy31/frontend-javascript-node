export {};

// Concept 22: Declaration merging (interface + namespace)

interface Merged {
  value: number;
}

namespace Merged {
  export const defaultValue = 0;
}

const mergedValue: Merged = { value: Merged.defaultValue };
