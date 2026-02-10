// 04 - Arrays and objects
console.log("04 - Arrays and Objects");

const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);

console.log({ nums, doubled, evens, sum });

const person = {
  id: 1,
  name: "Sam",
  skills: ["js", "node"],
};

const { name, skills } = person;
const extended = { ...person, active: true };

console.log(name, skills);
console.log(extended);