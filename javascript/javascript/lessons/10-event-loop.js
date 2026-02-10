// 10 - Event loop order
console.log("10 - Event Loop");

console.log("A");

setTimeout(() => console.log("B (timeout)"), 0);

Promise.resolve().then(() => console.log("C (microtask)"));

console.log("D");