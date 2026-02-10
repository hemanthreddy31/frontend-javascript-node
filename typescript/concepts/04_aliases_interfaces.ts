export {};

// Concept 04: Type aliases vs interfaces
// Both are structural. Interfaces support declaration merging.

interface IUser {
  id: string;
  name: string;
}

interface IUser {
  // Declaration merging adds fields
  email?: string;
}

type UserAlias = {
  id: string;
  name: string;
};

const u1: IUser = { id: "1", name: "Kim" };
const u2: UserAlias = { id: "2", name: "Lee" };
