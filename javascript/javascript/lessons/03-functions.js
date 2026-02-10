// 03 - Functions
console.log("03 - Functions");

function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

function greet(name = "friend") {
  return `Hello, ${name}!`;
}

function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(greet("Lia"));
console.log(sumAll(1, 2, 3, 4));
console.log(factorial(5));