const categoriesListEl = document.querySelector("#categories");
const listItemQuantity = categoriesListEl.children.length;
console.log(`Numbers of categories: ${listItemQuantity}`);

const listItemEls = [...categoriesListEl.children];
listItemEls.forEach((el) => {
  const categoryName = el.querySelector("h2").textContent;
  const categoryEls = el.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryEls}`);
});
