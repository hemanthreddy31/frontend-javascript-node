export {};

// Concept 38: noUncheckedIndexedAccess pattern

const list = ["a", "b"];
const maybe = list[2]; // with noUncheckedIndexedAccess, type is string | undefined
