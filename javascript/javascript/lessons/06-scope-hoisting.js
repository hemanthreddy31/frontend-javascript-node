// 06 - Scope and hoisting
console.log("06 - Scope and Hoisting");

var hoistedVar = "I am hoisted";
console.log(hoistedVar);

function sayHi() {
  return "Hi";
}

console.log(sayHi());

{
  let blockValue = 123;
  console.log("block", blockValue);
}

let outer = "outside";
{
  let outer = "inside";
  console.log("shadowed", outer);
}
console.log("outer", outer);