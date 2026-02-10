export {};

// Concept 30: Type compatibility and variance basics

type Handler<T> = (value: T) => void;

const handleString: Handler<string> = (value) => console.log(value);
const handleUnknown: Handler<unknown> = (value) => console.log(value);

// Assignment depends on compiler options like strictFunctionTypes
const h: Handler<string> = handleString;
const h2: Handler<string> = handleUnknown;
