export {};

// Concept 09: Enums and const enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Status {
  Idle = "IDLE",
  Busy = "BUSY",
}

const d: Direction = Direction.Up;
const s: Status = Status.Busy;

// const enum is inlined at compile time
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
const size: Size = Size.Medium;
