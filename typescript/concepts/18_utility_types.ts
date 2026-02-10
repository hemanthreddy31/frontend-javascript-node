export {};

// Concept 18: Utility types (built-in)

type User = { id: string; name: string; age?: number };

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type UserNameOnly = Pick<User, "name">;
type UserWithoutAge = Omit<User, "age">;

type Union = "a" | "b" | "c";
type WithoutAB = Exclude<Union, "a" | "b">; // "c"
type OnlyAB = Extract<Union, "a" | "b">; // "a" | "b"

type NotNull = NonNullable<string | null | undefined>; // string

type Fn = (a: number, b: string) => boolean;
type FnReturn = ReturnType<Fn>;
type FnParams = Parameters<Fn>;

class C {
  constructor(public x: number) {}
}
type CInstance = InstanceType<typeof C>;
type CParams = ConstructorParameters<typeof C>;

type AwaitedExample = Awaited<Promise<string>>; // string
