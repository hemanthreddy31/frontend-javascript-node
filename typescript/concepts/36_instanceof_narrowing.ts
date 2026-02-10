export {};

// Concept 36: Narrowing with instanceof

class ApiError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

function handle(err: unknown) {
  if (err instanceof ApiError) {
    err.code;
  }
}
