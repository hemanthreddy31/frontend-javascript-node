// 02 - Control flow and loops
console.log("02 - Control Flow");

const temp = 25;

if (temp > 30) {
  console.log("Hot");
} else if (temp >= 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}

const day = "Mon";

switch (day) {
  case "Mon":
    console.log("Start of the week");
    break;
  case "Fri":
    console.log("Almost weekend");
    break;
  default:
    console.log("Midweek");
}

for (let i = 0; i < 3; i++) {
  console.log("for", i);
}

let n = 0;
while (n < 3) {
  console.log("while", n);
  n++;
}

const items = ["pen", "book", "bag"];
for (const item of items) {
  console.log("for...of", item);
}