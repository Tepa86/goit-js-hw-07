const items = document.querySelectorAll("#categories > .item");
const count = items.length;
console.log(`Number of categories: ${count}`);

items.forEach((item) => {
  const elem = item.querySelectorAll("ul > li");
  const kategory = item.querySelector("h2");
  console.log(`Category: ${kategory.innerText}`);
  console.log(`Elements: ${elem.length}`);
});