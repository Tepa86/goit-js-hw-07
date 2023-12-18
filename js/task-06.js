function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

destroyButton.addEventListener("click", destroyBoxes);
createButton.addEventListener("click", () => {
  const sell = Number(controls.querySelector("input").value);
  if (sell >= 1 && sell <= 100) {
    createBoxes(sell);
  }
});
function createBoxes(sell) {
  const array = [];
  for (let i = 0; i < sell; i++) {
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    const color = getRandomHexColor();

    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = color;

    array.push(box);
  }

  boxes.innerHTML = array.map(({ outerHTML }) => outerHTML).join("");
  controls.querySelector("input").value = "";
}
function destroyBoxes() {
  boxes.innerHTML = "";
}




