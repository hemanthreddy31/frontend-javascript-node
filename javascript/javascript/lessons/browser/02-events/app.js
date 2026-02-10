const countBtn = document.querySelector("#countBtn");
const countValue = document.querySelector("#countValue");
const mirrorInput = document.querySelector("#mirrorInput");
const mirrorOutput = document.querySelector("#mirrorOutput");
const keyOutput = document.querySelector("#keyOutput");
const taskInput = document.querySelector("#taskInput");
const taskAdd = document.querySelector("#taskAdd");
const taskList = document.querySelector("#taskList");
const pulsePad = document.querySelector("#pulsePad");
const pulseReadout = document.querySelector("#pulseReadout");

let count = 0;

countBtn.addEventListener("click", () => {
  count += 1;
  countValue.textContent = count;
  countBtn.classList.add("pop");
  setTimeout(() => countBtn.classList.remove("pop"), 150);
});

mirrorInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  mirrorOutput.textContent = value.length ? value : "Start typing...";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    keyOutput.textContent = "—";
    return;
  }
  keyOutput.textContent = event.key;
});

function addTask(text) {
  const item = document.createElement("li");
  item.textContent = text;
  taskList.append(item);
}

taskAdd.addEventListener("click", () => {
  const value = taskInput.value.trim();
  if (!value) return;
  addTask(value);
  taskInput.value = "";
  taskInput.focus();
});

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    taskAdd.click();
  }
});

taskList.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  item.classList.toggle("done");
});

pulsePad.addEventListener("mousemove", (event) => {
  const rect = pulsePad.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  const xPct = Math.round(x * 100);
  const yPct = Math.round(y * 100);

  pulsePad.style.setProperty("--x", `${xPct}%`);
  pulsePad.style.setProperty("--y", `${yPct}%`);
  pulseReadout.textContent = `x: ${xPct}% · y: ${yPct}%`;
});

pulsePad.addEventListener("mouseleave", () => {
  pulsePad.style.setProperty("--x", "50%");
  pulsePad.style.setProperty("--y", "50%");
  pulseReadout.textContent = "x: 0% · y: 0%";
});