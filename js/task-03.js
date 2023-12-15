const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  const user = e.target.value.trim();

  nameOutput.textContent = user ? user : "Anonymous";
});