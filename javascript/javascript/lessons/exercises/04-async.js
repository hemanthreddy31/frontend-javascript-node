console.log("Exercise 04 - Async");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSequence() {
  const start = Date.now();
  await delay(150);
  await delay(100);
  return Date.now() - start;
}

async function runParallel() {
  const start = Date.now();
  await Promise.all([delay(150), delay(100)]);
  return Date.now() - start;
}

(async () => {
  const seq = await runSequence();
  const par = await runParallel();
  console.log("Sequential ms:", seq);
  console.log("Parallel ms:", par);
})();