const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const requiredLength = Number(inputEl.dataset.length);
  const enteredValue = inputEl.value;

  if (enteredValue.length === requiredLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
