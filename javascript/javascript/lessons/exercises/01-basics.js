console.log("Exercise 01 - Basics");

function check(label, actual, expected) {
  const pass = actual === expected;
  console.log(`${pass ? "PASS" : "FAIL"} - ${label}:`, actual);
}

// Task: return a friendly greeting using template strings.
function buildGreeting(name, age) {
  return `Hi ${name}, you are ${age} years old.`;
}

// Task: convert a string to a number and add 10.
function addTen(value) {
  return Number(value) + 10;
}

// Task: return true if the number is even.
function isEven(num) {
  return num % 2 === 0;
}

check("greeting", buildGreeting("Ava", 20), "Hi Ava, you are 20 years old.");
check("addTen", addTen("5"), 15);
check("isEven", isEven(42), true);
check("isEven", isEven(19), false);