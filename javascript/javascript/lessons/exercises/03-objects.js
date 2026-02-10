console.log("Exercise 03 - Objects");

function check(label, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${pass ? "PASS" : "FAIL"} - ${label}:`, actual);
}

const user = { id: 7, name: "Lia", skills: ["js"] };

// Task: return a new object with an added skill (do not mutate input).
function addSkill(person, skill) {
  return { ...person, skills: [...person.skills, skill] };
}

// Task: return a formatted string using object destructuring.
function formatUser(person) {
  const { id, name, skills } = person;
  return `${name} (#${id}) knows ${skills.length} skill(s).`;
}

const updated = addSkill(user, "node");

check("addSkill", updated, { id: 7, name: "Lia", skills: ["js", "node"] });
check("formatUser", formatUser(updated), "Lia (#7) knows 2 skill(s).");
check("original unchanged", user, { id: 7, name: "Lia", skills: ["js"] });