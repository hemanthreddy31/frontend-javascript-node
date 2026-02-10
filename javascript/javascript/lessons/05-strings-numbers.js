// 05 - Strings and numbers
console.log("05 - Strings and Numbers");

const text = "  JavaScript is fun  ";
const trimmed = text.trim();
const upper = trimmed.toUpperCase();
const hasWord = trimmed.includes("fun");

console.log({ trimmed, upper, hasWord });

const n = 42.789;
const fixed = n.toFixed(2);
const rounded = Math.round(n);
const random0to1 = Math.random();

console.log({ fixed, rounded, random0to1 });

const value = "100";
const parsed = Number(value);

console.log(parsed + 50);