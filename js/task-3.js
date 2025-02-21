const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const trimmedName = event.currentTarget.value.trim();
  
  output.textContent = trimmedName !== "" ? trimmedName : "Anonymous";
});
