export {};

// Concept 13: any, unknown, never, void

let loose: any = 1;
loose = "now a string";

let input: unknown = "text";
if (typeof input === "string") {
  const len = input.length;
}

function log(message: string): void {
  console.log(message);
}

function fail(message: string): never {
  throw new Error(message);
}
