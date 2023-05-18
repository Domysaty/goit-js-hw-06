const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = el;

  return liEl;
});

ingredientsListEl.append(...elements);
