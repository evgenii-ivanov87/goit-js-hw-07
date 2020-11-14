const inputRef = document.querySelector('#controls > input')
const createRef = document.querySelector('button[data-action="render"]')
const destroyRef = document.querySelector('button[data-action="destroy"]')
const boxesRef = document.querySelector('#boxes')

createRef.addEventListener("click", getAmount);
destroyRef.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +inputRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let newBox = document.createElement("div");
  for (var i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    newBox.appendChild(div);
  }
  boxes.appendChild(newBox);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}