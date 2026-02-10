console.log("Exercise 02 - Functions and Arrays");

function check(label, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${pass ? "PASS" : "FAIL"} - ${label}:`, actual);
}

// Task: return a new array with each number doubled.
function doubleAll(nums) {
  return nums.map((n) => n * 2);
}

// Task: keep only ages 18 or above.
function filterAdults(ages) {
  return ages.filter((age) => age >= 18);
}

// Task: sum all scores.
function sumScores(scores) {
  return scores.reduce((total, score) => total + score, 0);
}

check("doubleAll", doubleAll([1, 2, 3]), [2, 4, 6]);
check("filterAdults", filterAdults([12, 18, 22, 15]), [18, 22]);
check("sumScores", sumScores([10, 20, 30]), 60);