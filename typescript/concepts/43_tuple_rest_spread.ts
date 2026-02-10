export {};

// Concept 43: Tuple rest and spread types

type HeadTail<T extends unknown[]> = T extends [infer H, ...infer R] ? [H, R] : never;
type HT = HeadTail<[string, number, boolean]>; // [string, [number, boolean]]
