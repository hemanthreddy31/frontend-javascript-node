const loadBtn = document.querySelector("#loadBtn");
const abortBtn = document.querySelector("#abortBtn");
const statusEl = document.querySelector("#status");
const cardsEl = document.querySelector("#cards");
const latencyEl = document.querySelector("#latency");

const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=6";

const fallbackData = [
  {
    id: 1,
    title: "Offline cache",
    body: "Fetch failed, so this local packet is standing in.",
  },
  {
    id: 2,
    title: "Retry ready",
    body: "Reconnect and press Load transmissions to try again.",
  },
];

let controller = null;
let requestId = 0;

function setStatus(text, state) {
  statusEl.textContent = `Status: ${text}`;
  statusEl.className = `status${state ? " " + state : ""}`;
}

function renderCards(items, isFallback) {
  cardsEl.replaceChildren();
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    if (isFallback) card.classList.add("fallback");

    const title = document.createElement("h3");
    title.textContent = `${String(item.id).padStart(2, "0")} :: ${item.title}`;

    const body = document.createElement("p");
    body.textContent = item.body;

    card.append(title, body);
    cardsEl.append(card);
  });
}

async function loadTransmissions() {
  if (controller) {
    controller.abort();
  }

  requestId += 1;
  const currentId = requestId;
  controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4500);
  const start = performance.now();

  loadBtn.disabled = true;
  setStatus("loading", "loading");
  latencyEl.textContent = "—";

  try {
    const response = await fetch(endpoint, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    renderCards(data, false);

    const duration = Math.round(performance.now() - start);
    latencyEl.textContent = `${duration} ms`;
    setStatus("success", "success");
  } catch (error) {
    if (currentId !== requestId) return;
    renderCards(fallbackData, true);
    setStatus(`error (${error.message})`, "error");
    latencyEl.textContent = "fallback";
  } finally {
    clearTimeout(timeoutId);
    if (currentId !== requestId) return;
    controller = null;
    loadBtn.disabled = false;
  }
}

loadBtn.addEventListener("click", loadTransmissions);

abortBtn.addEventListener("click", () => {
  if (!controller) return;
  controller.abort();
  requestId += 1;
  controller = null;
  setStatus("aborted", "error");
  loadBtn.disabled = false;
});

setStatus("idle", "");
renderCards(fallbackData, true);