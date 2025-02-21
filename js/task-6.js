


const input = document.querySelector("#controls input"); 
const createBtn = document.querySelector("#controls [data-create]");
const destroyBtn = document.querySelector("#controls [data-destroy]");
const boxes = document.querySelector("#boxes");


function createBoxes(amount) {
  if (amount < 1 || amount > 100) return; 

  boxes.innerHTML = ""; 
  const elements = []; 
  for (let i = 0; i < amount; i++) {
    const boxItem = document.createElement("div");
    boxItem.style.width = `${30 + i * 10}px`; 
    boxItem.style.height = `${30 + i * 10}px`;
    boxItem.style.backgroundColor = getRandomHexColor(); 
    elements.push(boxItem);
  }

  boxes.append(...elements); 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
  input.value = ""; 
});

function destroyBoxes() {
  boxes.innerHTML = "";
}
destroyBtn.addEventListener("click", destroyBoxes);