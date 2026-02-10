export {};

// Concept 08: Classes, access modifiers, and inheritance

class Animal {
  // public by default
  name: string;

  // protected: accessible in subclasses
  protected age: number;

  // readonly: assigned only in constructor
  readonly species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  // Private field using # (JS private field)
  #trained: boolean = false;

  constructor(name: string, age: number) {
    super(name, age, "dog");
  }

  train() {
    this.#trained = true;
  }

  speak(): string {
    return `${this.name} barks`;
  }
}

// Abstract class and implements
abstract class Shape {
  abstract area(): number;
}

interface Drawable {
  draw(): void;
}

class Circle extends Shape implements Drawable {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  draw(): void {
    // draw on canvas
  }
}

// Parameter properties
class Point {
  constructor(public x: number, public y: number) {}
}
