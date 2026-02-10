const noteInput = document.querySelector("#noteInput");
const addNoteButton = document.querySelector("#addNote");
const clearButton = document.querySelector("#clearNotes");
const shuffleButton = document.querySelector("#shuffleAccent");
const noteWall = document.querySelector("#noteWall");
const previewNote = document.querySelector("#previewNote");
const countEl = document.querySelector("#count");

const accents = [
  { main: "#d86a38", alt: "#2f6f62" },
  { main: "#2d4b7c", alt: "#d38f2b" },
  { main: "#b84b5a", alt: "#1f6b8a" },
  { main: "#1b8a6b", alt: "#b1531b" },
  { main: "#7a4b8f", alt: "#d1a21f" },
];

const stamps = ["CUT", "PASTE", "PINNED", "STACK", "TRACE"];
const tags = ["DOM", "NODE", "STYLE", "CLASS", "EVENT"];

let accentIndex = 0;
let noteId = 1;

function updateCount() {
  const count = noteWall.querySelectorAll(".note").length;
  countEl.textContent = `${count} note${count === 1 ? "" : "s"}`;
}

function setAccent() {
  const { main, alt } = accents[accentIndex];
  document.documentElement.style.setProperty("--accent", main);
  document.documentElement.style.setProperty("--accent-2", alt);
}

function randomRotation() {
  return `${(Math.random() * 6 - 3).toFixed(1)}deg`;
}

function createNote(text) {
  noteId += 1;

  const note = document.createElement("article");
  note.className = "note";
  note.style.setProperty("--rotate", randomRotation());
  note.dataset.noteId = String(noteId);

  const top = document.createElement("div");
  top.className = "note-top";

  const stamp = document.createElement("span");
  stamp.className = "stamp";
  stamp.textContent = stamps[Math.floor(Math.random() * stamps.length)];

  const tag = document.createElement("span");
  tag.className = "note-tag";
  tag.textContent = tags[Math.floor(Math.random() * tags.length)];

  const textEl = document.createElement("p");
  textEl.className = "note-text";
  textEl.textContent = text;

  const meta = document.createElement("span");
  meta.className = "note-meta";
  meta.textContent = `id ${String(noteId).padStart(3, "0")}`;

  top.append(stamp, tag);
  note.append(top, textEl, meta);

  return note;
}

function addNote() {
  const raw = noteInput.value.trim();
  const text = raw.length ? raw : "Untitled note";
  const note = createNote(text);
  noteWall.prepend(note);
  noteInput.value = "";
  previewNote.textContent = "Your note appears here";
  updateCount();
}

addNoteButton.addEventListener("click", addNote);

noteInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNote();
  }
});

noteInput.addEventListener("input", () => {
  previewNote.textContent = noteInput.value || "Your note appears here";
});

noteWall.addEventListener("click", (event) => {
  const note = event.target.closest(".note");
  if (!note) return;
  note.classList.toggle("pinned");
});

clearButton.addEventListener("click", () => {
  noteWall.replaceChildren();
  updateCount();
});

shuffleButton.addEventListener("click", () => {
  accentIndex = (accentIndex + 1) % accents.length;
  setAccent();
});

setAccent();
updateCount();