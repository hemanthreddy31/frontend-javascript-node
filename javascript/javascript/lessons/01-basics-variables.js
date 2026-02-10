// 01 - Basics: variables, types, and operators
console.log("01 - Basics");

const name = "Ava";
let age = 20;
let isStudent = true;
let score = 98.5;
let nothing = null;
let notSet;

console.log({ name, age, isStudent, score, nothing, notSet });

age += 1; // reassign allowed for let

const greeting = "Hello, " + name + "!";
const templated = `Hi, ${name}. Next year you'll be ${age + 1}.`;

console.log(greeting);
console.log(templated);

const sum = 10 + 5;
const product = 10 * 5;
const isEqual = 10 === "10"; // strict equality

console.log({ sum, product, isEqual });