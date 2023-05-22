const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  const fontSize = inputEl.value;
  spanEl.style.fontSize = `${fontSize}px`;
});
