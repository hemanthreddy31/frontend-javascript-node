export {};

// Concept 31: Using `this` types in classes

class Builder {
  private data: Record<string, string> = {};

  set(key: string, value: string): this {
    this.data[key] = value;
    return this;
  }
}

class ExtendedBuilder extends Builder {
  enableFeature(): this {
    return this;
  }
}
