const inputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  userNameOutputEl.textContent =
    e.target.value.length !== 0 ? `${e.target.value}` : `Anonymous`;
});
