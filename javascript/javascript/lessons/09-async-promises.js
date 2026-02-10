// 09 - Async and Promises
console.log("09 - Async and Promises");

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchMock() {
  return delay(300).then(() => "Data loaded");
}

fetchMock().then(data => console.log("then:", data));

async function run() {
  const data = await fetchMock();
  console.log("await:", data);
}

run();