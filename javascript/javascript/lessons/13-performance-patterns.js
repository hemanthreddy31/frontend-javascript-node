// 13 - Performance patterns
console.log("13 - Performance Patterns");

function debounce(fn, delay) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, interval) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      fn(...args);
    }
  };
}

function memoize(fn) {
  const cache = new Map();
  return (x) => {
    if (cache.has(x)) return cache.get(x);
    const result = fn(x);
    cache.set(x, result);
    return result;
  };
}

const debounced = debounce((msg) => {
  console.log("debounced:", msg);
}, 200);

for (let i = 1; i <= 3; i++) {
  setTimeout(() => debounced(`call ${i}`), i * 50);
}

const throttled = throttle((msg) => {
  console.log("throttled:", msg);
}, 200);

let ticks = 0;
const intervalId = setInterval(() => {
  ticks += 1;
  throttled(`tick ${ticks}`);
  if (ticks >= 6) clearInterval(intervalId);
}, 60);

let calls = 0;
const slowSquare = (n) => {
  calls += 1;
  return n * n;
};

const fastSquare = memoize(slowSquare);

console.log("square:", fastSquare(4));
console.log("square again:", fastSquare(4));
console.log("calls:", calls, "(should be 1)");