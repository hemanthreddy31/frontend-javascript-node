// 07 - Closures
console.log("07 - Closures");

function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());

function makeGreeter(prefix) {
  return function (name) {
    return `${prefix}, ${name}`;
  };
}

const hello = makeGreeter("Hello");
console.log(hello("Ava"));