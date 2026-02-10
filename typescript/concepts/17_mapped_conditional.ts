export {};

// Concept 17: Mapped and conditional types

type ReadonlyProps<T> = { readonly [K in keyof T]: T[K] };
type OptionalProps<T> = { [K in keyof T]?: T[K] };

type IsString<T> = T extends string ? true : false;
type Test1 = IsString<"x">; // true
type Test2 = IsString<number>; // false

type Return<T> = T extends (...args: any[]) => infer R ? R : never;
type R1 = Return<() => number>; // number

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Person = { name: string; age: number };
type PersonGetters = Getters<Person>;
