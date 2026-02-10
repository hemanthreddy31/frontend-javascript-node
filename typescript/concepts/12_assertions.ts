export {};

// Concept 12: Type assertions, non-null, and definite assignment

const el = document.createElement("div") as HTMLDivElement;

// Non-null assertion
const maybeEl = document.querySelector("#app")!;
maybeEl.append(el);

class Service {
  // Definite assignment assertion
  private client!: { request(): void };
  init(client: { request(): void }) {
    this.client = client;
  }
}
