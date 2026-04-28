function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesInput = document.querySelector('div#controls input');
const createButton = document.querySelector('div#controls button[data-create]');
const destroyButton = document.querySelector(
  'div#controls button[data-destroy]'
);
const boxesContainer = document.querySelector('div#boxes');

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const boxSize = 30 + 10 * i;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
  }
  boxesContainer.append(...newBoxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const value = Number(boxesInput.value.trim());
  if (value > 0 && value <= 100) {
    destroyBoxes();
    createBoxes(value);
    boxesInput.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);
