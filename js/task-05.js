function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const element = document.querySelector("body");
const span = document.querySelector(".color");
button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  element.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
