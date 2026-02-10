const readline = require("readline");

const questions = [
  {
    q: "Which keyword creates a block-scoped variable?",
    options: ["A) var", "B) let", "C) function"],
    answer: "B",
  },
  {
    q: "What does === check?",
    options: ["A) Value only", "B) Value and type", "C) Reference only"],
    answer: "B",
  },
  {
    q: "Which array method returns a new filtered array?",
    options: ["A) map", "B) reduce", "C) filter"],
    answer: "C",
  },
  {
    q: "What is the output order? console.log('A'); setTimeout(()=>console.log('B'),0); Promise.resolve().then(()=>console.log('C')); console.log('D');",
    options: ["A) A D C B", "B) A B C D", "C) A C B D"],
    answer: "A",
  },
  {
    q: "Which creates a promise?",
    options: ["A) new Promise(...)", "B) new Array(...)", "C) new Object(...)"],
    answer: "A",
  },
  {
    q: "Which statement about arrow functions is true?",
    options: ["A) They have their own 'this'", "B) They inherit 'this'", "C) They must be async"],
    answer: "B",
  },
  {
    q: "Which method adds to the end of an array?",
    options: ["A) push", "B) shift", "C) unshift"],
    answer: "A",
  },
  {
    q: "Which keyword is used for error handling?",
    options: ["A) catch", "B) throw", "C) both"],
    answer: "C",
  },
  {
    q: "What does JSON.parse do?",
    options: ["A) Object to string", "B) String to object", "C) Clone array"],
    answer: "B",
  },
  {
    q: "Which keyword exports from a module (CommonJS)?",
    options: ["A) export", "B) module.exports", "C) require"],
    answer: "B",
  },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
let score = 0;

function ask() {
  if (index >= questions.length) {
    console.log(`\nScore: ${score}/${questions.length}`);
    rl.close();
    return;
  }

  const q = questions[index];
  console.log(`\n${index + 1}. ${q.q}`);
  q.options.forEach((opt) => console.log(opt));

  rl.question("Your answer (A/B/C): ", (answer) => {
    const normalized = answer.trim().toUpperCase();
    if (normalized === q.answer) {
      console.log("Correct!");
      score += 1;
    } else {
      console.log(`Incorrect. Answer: ${q.answer}`);
    }
    index += 1;
    ask();
  });
}

console.log("JavaScript Quiz 01");
ask();